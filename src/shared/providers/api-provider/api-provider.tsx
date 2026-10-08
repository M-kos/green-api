import { useMemo } from 'react';
import type { Credentials } from '../../api/types.ts';
import { ApiContext } from './api-context.ts';
import { MaxApiImpl } from '../../api/max-api.ts';
import { apiClient } from '../../api/client.ts';
import { createBuildUrl } from '../../api/utils.ts';
import type { ApiContextData } from './types.ts';

interface Props {
  credentials: Credentials | null;
}

export const ApiProvider = ({ credentials, children }: React.PropsWithChildren<Props>) => {
  const contextData: ApiContextData | null = useMemo(() => {
    if (!credentials) {
      return null;
    }

    const buildUrl = createBuildUrl(credentials);

    return {
      api: new MaxApiImpl(apiClient, buildUrl),
    };
  }, [credentials]);

  return <ApiContext.Provider value={contextData}>{children}</ApiContext.Provider>;
};
