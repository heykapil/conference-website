export const checkDate = (endDate: Date) => {
  const EndDate = new Date(endDate);
  const CurrentDate = new Date();
  CurrentDate.setHours(0, 0, 0, 0);
  if (EndDate >= CurrentDate) {
    return true;
  } else {
    return false;
  }
};
