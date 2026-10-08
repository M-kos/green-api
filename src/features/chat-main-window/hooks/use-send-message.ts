import { useState } from 'react';
import type { MaxApi } from '../../../shared/api/types.ts';

export const useSendMessage = (api: MaxApi, chatId?: string) => {
  const [isSending, setIsSending] = useState(false);

  const send = async (message: string) => {
    if (!chatId) {
      return;
    }

    setIsSending(true);

    try {
      await api.sendMessage({ message, chatId });
    } finally {
      setIsSending(false);
    }
  };

  return {
    isSending,
    send,
  };
};
