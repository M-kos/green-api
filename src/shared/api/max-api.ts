import type { BuildUrlFn, Client, ExtendedResponse, MaxApi } from './types';
import type {
  CheckAccountRequest,
  CheckAccountResponse,
  DeleteNotificationResponse,
  GetContactInfoRequest,
  GetContactInfoResponse,
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

  checkAccount(request: CheckAccountRequest): ExtendedResponse<CheckAccountResponse> {
    return this.client.request({
      method: 'POST',
      path: this.buildUrl('checkAccount'),
      body: request,
    });
  }

  getContactInfo(request: GetContactInfoRequest): ExtendedResponse<GetContactInfoResponse> {
    return this.client.request({
      method: 'POST',
      path: this.buildUrl('getContactInfo'),
      body: request,
    });
  }

  sendMessage(request: SendMessageRequest): ExtendedResponse<SendMessageResponse> {
    return this.client.request({
      method: 'POST',
      path: this.buildUrl('sendMessage'),
      body: request,
    });
  }

  receiveNotification(
    receiveTimeout = 5,
    signal?: AbortSignal,
  ): ExtendedResponse<ReceiveNotificationResponse> {
    return this.client.request({
      method: 'GET',
      path: this.buildUrl('receiveNotification', `?receiveTimeout=${receiveTimeout}`),
      signal,
    });
  }

  deleteNotification(receiptId: number): ExtendedResponse<DeleteNotificationResponse> {
    return this.client.request({
      method: 'DELETE',
      path: this.buildUrl('deleteNotification', `/${receiptId}`),
    });
  }
}
