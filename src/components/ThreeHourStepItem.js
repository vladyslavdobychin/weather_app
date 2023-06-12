
const ThreeHourStepItem = ({ time, icon, temp }) => {
  const iconLink = `https://openweathermap.org/img/wn/${icon}.png`;

  return (
    <div className='current-hour'>
      <p>{time}</p>
      <img src={iconLink} alt='weather icon' className='weather-icon' />
      <p>{temp}°</p>
    </div>
  );
};

export default ThreeHourStepItem;
