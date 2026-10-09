import type {
  CheckAccountRequest,
  CheckAccountResponse,
  DeleteNotificationResponse,
  GetContactInfoRequest,
  GetContactInfoResponse,
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

export interface ApiResponse<T> {
  data: T;
}

export type ExtendedResponse<T> = Promise<ApiResponse<T>>;

export interface Client {
  request<TResponse, TBody = unknown>(data: RequestOptions<TBody>): ExtendedResponse<TResponse>;
}

export interface MaxApi {
  checkAccount(request: CheckAccountRequest): ExtendedResponse<CheckAccountResponse>;
  sendMessage(request: SendMessageRequest): ExtendedResponse<SendMessageResponse>;
  receiveNotification(
    receiveTimeout: number,
    signal?: AbortSignal,
  ): ExtendedResponse<ReceiveNotificationResponse>;
  deleteNotification(receiptId: number): ExtendedResponse<DeleteNotificationResponse>;
  getContactInfo(request: GetContactInfoRequest): ExtendedResponse<GetContactInfoResponse>;
}

export interface LoginApi {
  getStateInstance(): ExtendedResponse<StateInstanceResponse>;
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
