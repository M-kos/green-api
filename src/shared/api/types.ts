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

export interface Credentials {
  idInstance: number;
  apiTokenInstance: string;
}

export interface ChatMessage {
  id: string;
  chatId: string;
  text: string;
  timestamp: number;
  direction: 'incoming' | 'outgoing';
}
