import { useContext } from 'react';
import { ApiContext } from './api-context.ts';

export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi must be used within ApiContext');
  }

  return context;
};
