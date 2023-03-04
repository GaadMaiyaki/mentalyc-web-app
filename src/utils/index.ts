export const parseClassName = (classes: Array<string>): string => {
  return classes.filter(Boolean).join(" ");
};
