import { useEffect, useRef } from 'react';

import type { ChatMessage, MaxApi } from '../../../shared/api/types.ts';
import { notificationToMessage } from '../../../shared/api/utils.ts';

const RECEIVE_TIMEOUT = 60;
const RETRY_DELAY = 2_000;

interface Props {
  api: MaxApi;
  chatId: string | undefined;
  onMessage: (message: ChatMessage) => void;
  onError?: (error: unknown) => void;
}

const wait = (delay: number, signal: AbortSignal): Promise<void> =>
  new Promise((resolve, reject) => {
    const timeoutId = setTimeout(resolve, delay);

    signal.addEventListener(
      'abort',
      () => {
        clearTimeout(timeoutId);
        reject(signal.reason);
      },
      { once: true },
    );
  });

export const useNotifications = ({ api, chatId, onMessage, onError }: Props) => {
  const onMessageRef = useRef(onMessage);
  const onErrorRef = useRef(onError);

  useEffect(() => {
    onMessageRef.current = onMessage;
    onErrorRef.current = onError;
  }, [onMessage, onError]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const receiveNotifications = async () => {
      if (!chatId) {
        return;
      }

      while (!signal.aborted) {
        try {
          const notification = await api.receiveNotification(RECEIVE_TIMEOUT, signal);

          if (signal.aborted) {
            return;
          }

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

          onErrorRef.current?.(error);

          try {
            await wait(RETRY_DELAY, signal);
          } catch {
            return;
          }
        }
      }
    };

    receiveNotifications();

    return () => {
      controller.abort();
    };
  }, [api, chatId]);
};
