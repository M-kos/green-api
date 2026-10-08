import type { BuildUrlFn, ChatMessage, Credentials } from './types.ts';
import type { Notification, TextMessageData } from './dto.ts';

export const createBuildUrl = ({ idInstance, apiTokenInstance }: Credentials): BuildUrlFn => {
  return (path: string, subPath = ''): string => {
    return `${import.meta.env.VITE_API_URL}/waInstance${idInstance}/${path}/${apiTokenInstance}${subPath}`;
  };
};

export function notificationToMessage(notification: Notification): ChatMessage | null {
  const { typeWebhook, idMessage, timestamp, senderData, messageData } = notification;

  if (!idMessage || !senderData || !messageData) {
    return null;
  }

  const isIncoming = typeWebhook === 'incomingMessageReceived';

  if (!isIncoming) {
    return null;
  }

  if (messageData.typeMessage !== 'textMessage') {
    return null;
  }

  const textMessageData = messageData as TextMessageData;

  return {
    id: idMessage,
    chatId: senderData.chatId,
    text: textMessageData.textMessageData.textMessage,
    timestamp: timestamp * 1000,
    direction: isIncoming ? 'incoming' : 'outgoing',
  };
}
