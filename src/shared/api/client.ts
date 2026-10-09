import type { ApiResponse, Client, RequestOptions } from './types.ts';

class ApiClient implements Client {
  async request<TResponse, TBody = unknown>({
    method,
    path,
    body,
    signal,
  }: RequestOptions<TBody>): Promise<ApiResponse<TResponse>> {
    const response = await fetch(path, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body === undefined ? undefined : JSON.stringify(body),
      signal,
    });

    const responseBody = await response.text();

    if (!response.ok) {
      throw new Error(this.getErrorMessage(responseBody, response.statusText));
    }

    if (!responseBody.trim()) {
      throw new Error('Empty response body');
    }

    try {
      return { data: JSON.parse(responseBody) as TResponse };
    } catch {
      return { data: responseBody as TResponse };
    }
  }

  private getErrorMessage(responseBody: string, statusText?: string) {
    let message = statusText || 'Something went wrong';

    if (responseBody.trim()) {
      try {
        const parsedBody = JSON.parse(responseBody);
        message = parsedBody?.message || message;
      } catch {
        /* empty */
      }
    }

    return message;
  }
}

export const apiClient = new ApiClient();
