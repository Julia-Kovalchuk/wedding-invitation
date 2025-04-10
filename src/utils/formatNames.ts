export const formatNames = (names: string[] = []) => {
  if (names.length === 0) return "";
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} и ${names[1]}`;
  return `${names[0]}, ${names[1]} и ${names[2]}`;
};
