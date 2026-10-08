import type {
  CheckAccountRequest,
  CheckAccountResponse,
  DeleteNotificationResponse,
  ReceiveNotificationResponse,
  SendMessageRequest,
  SendMessageResponse,
  StateInstanceResponse,
} from './dto.ts';

type HttpMethod = 'GET' | 'POST' | 'DELETE';

export interface RequestOptions<TBody = unknown> {
  method: HttpMethod;
  path: string;
  body?: TBody;
  signal?: AbortSignal;
}

export interface Client {
  request<TResponse, TBody = unknown>(data: RequestOptions<TBody>): Promise<TResponse | null>;
}

export interface MaxApi {
  checkAccount(request: CheckAccountRequest): Promise<CheckAccountResponse | null>;
  sendMessage(request: SendMessageRequest): Promise<SendMessageResponse | null>;
  receiveNotification(
    receiveTimeout: number,
    signal?: AbortSignal,
  ): Promise<ReceiveNotificationResponse | null>;
  deleteNotification(receiptId: number): Promise<DeleteNotificationResponse | null>;
}

export interface LoginApi {
  getStateInstance(): Promise<StateInstanceResponse | null>;
}

export interface Credentials {
  idInstance: string;
  apiTokenInstance: string;
}

export interface ChatMessage {
  id: string;
  chatId: string;
  text: string;
  timestamp: number;
  direction: 'incoming' | 'outgoing';
}

export type BuildUrlFn = (path: string, receiptId?: string) => string;
