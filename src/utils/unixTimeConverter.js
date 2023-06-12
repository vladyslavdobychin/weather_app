const unixTimeConverter = (unixTime) => {
  const date = new Date(unixTime * 1000);
  const dayName = date.toLocaleDateString(undefined, { weekday: 'long' });
  const monthName = date.toLocaleDateString(undefined, { month: 'long' });
  const dayOfMonth = date.getDate();
  const suffix = getDayOfMonthSuffix(dayOfMonth);
  const formattedDate = `${dayName} ${monthName} ${dayOfMonth}${suffix}`;

  function getDayOfMonthSuffix(dayOfMonth) {
    if (dayOfMonth > 3 && dayOfMonth < 21) return 'th';
    switch (dayOfMonth % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
  return formattedDate;
};

export default unixTimeConverter;
