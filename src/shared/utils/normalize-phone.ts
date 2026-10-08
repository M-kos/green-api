export const normalizePhone = (phone: string) => {
  if (!phone) {
    return null;
  }

  if (phone.startsWith('+')) {
    phone = phone.replace('+', '');
  }

  if (phone.startsWith('8')) {
    phone = phone.replace('8', '7');
  }

  const phoneNumber = Number(phone);

  if (isNaN(phoneNumber)) {
    return null;
  }

  return phoneNumber;
};
