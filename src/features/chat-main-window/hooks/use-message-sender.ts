import { useState } from 'react';
import { useApi } from '../../../shared/providers/api-provider/use-api.ts';
import { useSendMessage } from './use-send-message.ts';

export const useMessageSender = (chatId?: string) => {
  const [value, setValue] = useState('');
  const { api } = useApi();
  const { send, isSending } = useSendMessage(api, chatId);

  const canSend = value.trim().length > 0 && !isSending;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSend = async () => {
    if (!canSend) {
      return;
    }

    try {
      await send(value);
      setValue('');
    } catch (error) {
      console.error(error);
    }
  };

  return {
    value,
    canSend,
    onChange,
    onSend,
  };
};
