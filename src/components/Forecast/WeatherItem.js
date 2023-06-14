const WeatherItem = ({ data, dateConverted, isCurrent, icon, isFocused }) => {
  const {
    name,
    sys: { country },
    main: { temp },
    weather,
  } = data;

  const focused = dateConverted === isFocused;

  return (
    <div key={data.dt} className={`forecast-item ${focused ? 'focused' : ''}`}>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt='weather icon'
        className='weather-icon'
      />

      {isCurrent && (
        <h3>
          Today, {name} {country}
        </h3>
      )}

      <h3>{dateConverted}</h3>
      <p>Temperature: {temp.toFixed(1)}°C</p>
      <p>Condition: {weather[0].main}</p>
    </div>
  );
};

export default WeatherItem;
