import type { ContactInfo } from '../../../entities/contact-info';
import { useApi } from '../../../shared/providers/api-provider/use-api.ts';
import { useCheckAccount } from './use-check-account.ts';
import { useGetContactInfo } from './use-get-contact-info.ts';
import { normalizePhone } from '../../../shared/utils/normalize-phone.ts';
import { useState } from 'react';

export const useChatSidebar = (setContactInfo: (contact: ContactInfo) => void) => {
  const { api } = useApi();
  const { isChecking, checkAccount } = useCheckAccount(api);
  const { isGetting, getContactInfo } = useGetContactInfo(api);
  const [error, setError] = useState<Error | null>(null);

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const phone = formData.get('search')?.toString().trim() || '';
    const phoneNumber = normalizePhone(phone);

    if (!phoneNumber) {
      setError(new Error('Phone number is wrong'));
      return;
    }

    try {
      const { data } = await checkAccount(phoneNumber);

      if (!data || !data.exist) {
        throw new Error('Account does not exist');
      }

      const { data: info } = await getContactInfo(data.chatId);

      if (!info) {
        throw new Error('Contact not found');
      }

      setContactInfo(info);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
    }
  };

  return {
    handleSubmit,
    isLoading: isGetting || isChecking,
    error,
  };
};
