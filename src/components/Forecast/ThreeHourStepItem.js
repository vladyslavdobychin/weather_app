const ThreeHourStepItem = ({ time, icon, temp, dateConverted, isFocused }) => {
  const iconLink = `https://openweathermap.org/img/wn/${icon}.png`;
  const focused = dateConverted === isFocused;

  return (
    <div className={`current-hour ${focused ? 'focused' : ''}`}>
      <p>{time}</p>
      <img src={iconLink} alt='weather icon' className='weather-icon' />
      <p>{temp}°С</p>
    </div>
  );
};

export default ThreeHourStepItem;
