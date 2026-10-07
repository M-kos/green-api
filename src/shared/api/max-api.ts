import type { Client } from './types';
import type {
  CheckAccountRequest,
  CheckAccountResponse,
  DeleteNotificationResponse,
  ReceiveNotificationResponse,
  SendMessageRequest,
  SendMessageResponse,
} from './dto.ts';
import { apiClient } from './client.ts';

class MaxApi {
  private readonly client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  checkAccount(request: CheckAccountRequest): Promise<CheckAccountResponse> {
    return this.client.request({
      method: 'POST',
      path: 'checkAccount',
      body: request,
    });
  }

  sendMessage(request: SendMessageRequest): Promise<SendMessageResponse> {
    return this.client.request({
      method: 'POST',
      path: 'sendMessage',
      body: request,
    });
  }

  receiveNotification(
    receiveTimeout = 5,
    signal?: AbortSignal,
  ): Promise<ReceiveNotificationResponse | null> {
    return this.client.request({
      method: 'GET',
      path: `receiveNotification?receiveTimeout=${receiveTimeout}`,
      signal,
    });
  }

  deleteNotification(receiptId: number): Promise<DeleteNotificationResponse> {
    return this.client.request({
      method: 'DELETE',
      path: `deleteNotification/${receiptId}`,
    });
  }
}

export const maxApi = new MaxApi(apiClient);
