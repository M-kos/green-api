import type { Client, RequestOptions } from './types.ts';

class ApiClient implements Client {
  async request<TResponse, TBody = unknown>({
    method,
    path,
    body,
    signal,
  }: RequestOptions<TBody>): Promise<TResponse | null> {
    const response = await fetch(path, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body === undefined ? undefined : JSON.stringify(body),
      signal,
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.text();

    if (!data) {
      return null;
    }

    try {
      return JSON.parse(data) as TResponse;
    } catch {
      return null;
    }
  }
}

export const apiClient = new ApiClient();
