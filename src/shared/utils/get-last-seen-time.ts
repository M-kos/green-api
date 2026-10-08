export const getLastSeenTime = (timestamp: number) => {
  const date = new Date(timestamp);

  return date.toLocaleTimeString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
};
