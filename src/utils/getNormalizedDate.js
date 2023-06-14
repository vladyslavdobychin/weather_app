const getNormalizedDate = (unixTime) => {
  const date = new Date(unixTime * 1000);

  // If time is 00:00, consider it part of previous day
  if (date.getHours() === 0) {
    date.setDate(date.getDate() - 1);
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth() returns month index (0-11), so we add 1
  const day = date.getDate();

  // Return date as "YYYY-MM-DD" string
  return `${year}-${month.toString().padStart(2, '0')}-${day
    .toString()
    .padStart(2, '0')}`;
};

export default getNormalizedDate;
