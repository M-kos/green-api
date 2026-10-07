import type { ChatMessage, Credentials } from './types.ts';
import { API_URL } from './constants.ts';
import type { Notification, TextMessageData } from './dto.ts';

export const createBuildUrl = (credentials: Credentials) => {
  return (path: string): string => {
    const { idInstance, apiTokenInstance } = credentials;
    return `${API_URL}/waInstance${idInstance}/${path}/${apiTokenInstance}`;
  };
};

export function notificationToMessage(notification: Notification): ChatMessage | null {
  const { typeWebhook, idMessage, timestamp, senderData, messageData } = notification;

  if (!idMessage || !senderData || !messageData) {
    return null;
  }

  const isIncoming = typeWebhook === 'incomingMessageReceived';

  const isOutgoing =
    typeWebhook === 'outgoingMessageReceived' || typeWebhook === 'outgoingAPIMessageReceived';

  if (!isIncoming && !isOutgoing) {
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
