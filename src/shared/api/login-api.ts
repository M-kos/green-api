import type { BuildUrlFn, Client, LoginApi } from './types';
import type { StateInstanceResponse } from './dto.ts';

export class LoginApiImpl implements LoginApi {
  private readonly client: Client;
  private readonly buildUrl: BuildUrlFn;

  constructor(client: Client, buildUrl: BuildUrlFn) {
    this.client = client;
    this.buildUrl = buildUrl;
  }

  getStateInstance(): Promise<StateInstanceResponse | null> {
    return this.client.request({
      method: 'GET',
      path: this.buildUrl('getStateInstance'),
    });
  }
}
