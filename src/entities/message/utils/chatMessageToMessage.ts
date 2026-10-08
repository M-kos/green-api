import type { ChatMessage } from '../../../shared/api/types.ts';
import type { MessageData } from '../model/types.ts';

export const chatMessageToMessageData = (message: ChatMessage): MessageData => {
  const date = new Date(message.timestamp);

  const time = date.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const messageData: MessageData = {
    id: message.id,
    text: message.text,
    time,
    outgoing: false,
  };

  if (message.direction === 'outgoing') {
    messageData.outgoing = true;
  }

  return messageData;
};
