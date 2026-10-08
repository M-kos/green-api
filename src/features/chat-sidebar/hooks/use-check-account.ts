import { useState } from 'react';
import type { MaxApi } from '../../../shared/api/types.ts';

export const useCheckAccount = (api: MaxApi) => {
  const [isChecking, setIsChecking] = useState(false);

  const checkAccount = async (phoneNumber: number) => {
    setIsChecking(true);

    try {
      return await api.checkAccount({ phoneNumber });
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setIsChecking(false);
    }
  };

  return {
    isChecking,
    checkAccount,
  };
};
