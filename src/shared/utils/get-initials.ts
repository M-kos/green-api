export const getInitials = (fullName: string) =>
  fullName
    .trim()
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
