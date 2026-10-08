export interface CheckAccountRequest {
  phoneNumber: number;
}

export interface CheckAccountResponse {
  exist: boolean;
  chatId: string;
}

export interface SendMessageRequest {
  chatId: string;
  message: string;
  typingTime?: number;
  quotedMessageId?: string;
}

export interface SendMessageResponse {
  idMessage: string;
}

export interface DeleteNotificationResponse {
  result: boolean;
  reason: string;
}

export type NotificationType =
  'incomingMessageReceived' | 'outgoingMessageReceived' | 'outgoingAPIMessageReceived';

export interface InstanceData {
  idInstance: number;
  wid: string;
  typeInstance: 'v3';
}

export interface SenderData {
  chatId: string;
  chatName: string;
  chatType: 'user' | 'group';
  sender: string;
  senderName: string;
  senderType: 'user';
  senderContactName: string;
  senderPhoneNumber: number;
}

export interface TextMessageData {
  typeMessage: 'textMessage';
  textMessageData: {
    textMessage: string;
    isForwarded?: boolean;
  };
}

export interface ExtendedTextMessageData {
  typeMessage: 'extendedTextMessage';
  extendedTextMessageData: {
    text: string;
  };
}

export type MessageData = TextMessageData | ExtendedTextMessageData;

export interface Notification {
  typeWebhook: NotificationType;
  instanceData: InstanceData;
  timestamp: number;
  idMessage?: string;
  senderData?: SenderData;
  messageData?: MessageData;
}

export interface ReceiveNotificationResponse {
  receiptId: number;
  body: Notification;
}

export type StateInstanceStatus =
  'authorized' | 'notAuthorized' | 'blocked' | 'starting' | 'suspended' | 'pendingPassword';

export interface StateInstanceResponse {
  stateInstance: StateInstanceStatus;
}

export interface GetContactInfoRequest {
  chatId: string;
}
export interface GetContactInfoResponse {
  avatar: string;
  name: string;
  contactName: string;
  chatId: string;
  chatType: string;
  lastSeen: number;
  phoneNumber: number;
  phoneNumberTimestamp: number;
}
