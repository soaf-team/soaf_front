export const getDateStatus = (a: Date, b: Date) => {
  const aDate = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  const bDate = new Date(b.getFullYear(), b.getMonth(), b.getDate());

  if (aDate > bDate) {
    return "future";
  }
  if (aDate < bDate) {
    return "past";
  }
  return "today";
};
