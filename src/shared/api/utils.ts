import type { BuildUrlFn, ChatMessage, Credentials } from './types.ts';
import type { Notification } from './dto.ts';

export const createBuildUrl = ({ idInstance, apiTokenInstance }: Credentials): BuildUrlFn => {
  return (path: string, subPath = ''): string => {
    return `${import.meta.env.VITE_API_URL}/waInstance${idInstance}/${path}/${apiTokenInstance}${subPath}`;
  };
};

const isTextMessage = (typeMessage: string) =>
  typeMessage === 'textMessage' || typeMessage === 'extendedTextMessage';

export function notificationToMessage({
  typeWebhook,
  idMessage,
  timestamp,
  senderData,
  messageData,
}: Notification): ChatMessage | null {
  if (!idMessage || !senderData || !messageData) {
    return null;
  }

  const isIncoming = typeWebhook === 'incomingMessageReceived';

  if (!isTextMessage(messageData.typeMessage)) {
    return null;
  }

  const message: ChatMessage = {
    id: idMessage,
    chatId: senderData.chatId,
    timestamp: timestamp * 1000,
    direction: isIncoming ? 'incoming' : 'outgoing',
    text: '',
  };

  if (messageData.typeMessage === 'textMessage') {
    message.text = messageData.textMessageData.textMessage;
  }

  if (messageData.typeMessage === 'extendedTextMessage') {
    message.text = messageData.extendedTextMessageData.text;
  }

  return message;
}
