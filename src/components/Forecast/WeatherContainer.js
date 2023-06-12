import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';
import ThreeHourStepForecast from './ThreeHourStepForecast';

const WeatherContainer = () => {
  const { forecast, currentWeather, error } = useSelector(
    (state) => state.weather
  );

  const storedWeather = localStorage.getItem('lastFetchedWeather');
  const storedForecast = localStorage.getItem('lastFetchedForecast');

  if (!forecast && !currentWeather && !storedWeather && !storedForecast) {
    return (
      <div className='forecast-item'>
        <p>Choose your city to display the forecast.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='forecast-item'>
        <p>Error: {error}</p>;
      </div>
    );
  }

  return (
    <Fragment>
      <div className='main-weather-container'>
        <CurrentWeather />
        <WeatherForecast />
      </div>
      <ThreeHourStepForecast />
    </Fragment>
  );
};

export default WeatherContainer;
