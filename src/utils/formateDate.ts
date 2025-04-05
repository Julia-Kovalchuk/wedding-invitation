export const formateDate = (date: string) => {
  return new Date(date).toLocaleDateString("ru-RU");
};
