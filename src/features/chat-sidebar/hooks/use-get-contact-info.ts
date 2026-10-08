import { useState } from 'react';
import type { MaxApi } from '../../../shared/api/types.ts';

export const useGetContactInfo = (api: MaxApi) => {
  const [isGetting, setIsGetting] = useState(false);

  const getContactInfo = async (chatId: string) => {
    setIsGetting(true);

    try {
      return await api.getContactInfo({ chatId });
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setIsGetting(false);
    }
  };

  return {
    isGetting,
    getContactInfo,
  };
};
