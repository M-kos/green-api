import { useNotifications } from './use-notifications.ts';
import { useApi } from '../../../shared/providers/api-provider/use-api.ts';
import { useState } from 'react';
import type { MessageData } from '../../../entities/message';
import { chatMessageToMessageData } from '../../../entities/message/utils/chatMessageToMessage.ts';

export const useMessageList = (chatId?: string) => {
  const { api } = useApi();
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useNotifications({
    api,
    chatId,
    onMessage: (message) => {
      setError(null);
      setMessages((prev) => {
        if (prev.some((item) => item.id === message.id)) {
          return prev;
        }

        return [...prev, chatMessageToMessageData(message)];
      });
    },
    onError: () => {
      setError('A message retrieval error has occurred');
    },
  });

  return {
    messages,
    error,
  };
};
