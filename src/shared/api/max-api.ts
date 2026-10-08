import type { BuildUrlFn, Client, MaxApi } from './types';
import type {
  CheckAccountRequest,
  CheckAccountResponse,
  DeleteNotificationResponse,
  ReceiveNotificationResponse,
  SendMessageRequest,
  SendMessageResponse,
} from './dto.ts';

export class MaxApiImpl implements MaxApi {
  private readonly client: Client;
  private readonly buildUrl: BuildUrlFn;

  constructor(client: Client, buildUrl: BuildUrlFn) {
    this.client = client;
    this.buildUrl = buildUrl;
  }

  checkAccount(request: CheckAccountRequest): Promise<CheckAccountResponse | null> {
    return this.client.request({
      method: 'POST',
      path: this.buildUrl('checkAccount'),
      body: request,
    });
  }

  sendMessage(request: SendMessageRequest): Promise<SendMessageResponse | null> {
    return this.client.request({
      method: 'POST',
      path: this.buildUrl('sendMessage'),
      body: request,
    });
  }

  receiveNotification(
    receiveTimeout = 5,
    signal?: AbortSignal,
  ): Promise<ReceiveNotificationResponse | null> {
    return this.client.request({
      method: 'GET',
      path: this.buildUrl('receiveNotification', `?receiveTimeout=${receiveTimeout}`),
      signal,
    });
  }

  deleteNotification(receiptId: number): Promise<DeleteNotificationResponse | null> {
    return this.client.request({
      method: 'DELETE',
      path: this.buildUrl('deleteNotification', `/${receiptId}`),
    });
  }
}
