export const isEmpty = (obj: object) => {
  if (Object.keys(obj).length !== 0) {
    return Object.values(obj).some((x) => !x);
  }
  return true;
};
