import type { Credentials } from '../../../shared/api/types.ts';
import { useState } from 'react';
import { createBuildUrl } from '../../../shared/api/utils.ts';
import { LoginApiImpl } from '../../../shared/api/login-api.ts';
import { apiClient } from '../../../shared/api/client.ts';

export const useLogin = (callback: (credentials: Credentials) => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const checkStatus = async (credentials: Credentials) => {
    setIsLoading(true);
    setError(null);

    const buildUrl = createBuildUrl(credentials);
    const loginApi = new LoginApiImpl(apiClient, buildUrl);

    try {
      const { data } = await loginApi.getStateInstance();

      if (!data || data.stateInstance !== 'authorized') {
        throw new Error('Not authorized');
      }

      callback(credentials);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    checkStatus,
  };
};
