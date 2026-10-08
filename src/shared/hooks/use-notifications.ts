import { useEffect, useRef, useState } from 'react';

import type { ChatMessage, MaxApi } from '../api/types.ts';
import { notificationToMessage } from '../api/utils.ts';

const RECEIVE_TIMEOUT = 60;
const RETRY_DELAY = 2_000;

export type NotificationsStatus = 'idle' | 'connecting' | 'connected' | 'error';

interface UseNotificationsOptions {
  api: MaxApi | null;
  chatId: string | null;
  onMessage: (message: ChatMessage) => void;
  onError?: (error: unknown) => void;
}

interface UseNotificationsResult {
  status: NotificationsStatus;
}

const wait = (delay: number, signal: AbortSignal): Promise<void> =>
  new Promise((resolve, reject) => {
    const timeoutId = window.setTimeout(resolve, delay);

    signal.addEventListener(
      'abort',
      () => {
        window.clearTimeout(timeoutId);
        reject(signal.reason);
      },
      { once: true },
    );
  });

export const useNotifications = ({
  api,
  chatId,
  onMessage,
  onError,
}: UseNotificationsOptions): UseNotificationsResult => {
  const [status, setStatus] = useState<NotificationsStatus>('idle');

  const onMessageRef = useRef(onMessage);
  const onErrorRef = useRef(onError);

  useEffect(() => {
    onMessageRef.current = onMessage;
    onErrorRef.current = onError;
  }, [onMessage, onError]);

  useEffect(() => {
    if (!api || !chatId) {
      // setStatus('idle');
      return;
    }

    const controller = new AbortController();
    const { signal } = controller;

    const receiveNotifications = async () => {
      setStatus('connecting');

      while (!signal.aborted) {
        try {
          const notification = await api.receiveNotification(RECEIVE_TIMEOUT, signal);

          if (signal.aborted) {
            return;
          }

          setStatus('connected');

          if (!notification) {
            continue;
          }

          try {
            const message = notificationToMessage(notification.body);

            if (message?.chatId === chatId) {
              onMessageRef.current(message);
            }
          } finally {
            await api.deleteNotification(notification.receiptId);
          }
        } catch (error) {
          if (signal.aborted) {
            return;
          }

          setStatus('error');
          onErrorRef.current?.(error);

          try {
            await wait(RETRY_DELAY, signal);
          } catch {
            return;
          }
        }
      }
    };

    void receiveNotifications();

    return () => controller.abort();
  }, [api, chatId]);

  return { status };
};
