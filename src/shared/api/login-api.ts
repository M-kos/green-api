import type { BuildUrlFn, Client, ExtendedResponse, LoginApi } from './types';
import type { StateInstanceResponse } from './dto.ts';

export class LoginApiImpl implements LoginApi {
  private readonly client: Client;
  private readonly buildUrl: BuildUrlFn;

  constructor(client: Client, buildUrl: BuildUrlFn) {
    this.client = client;
    this.buildUrl = buildUrl;
  }

  getStateInstance(): ExtendedResponse<StateInstanceResponse> {
    return this.client.request({
      method: 'GET',
      path: this.buildUrl('getStateInstance'),
    });
  }
}
