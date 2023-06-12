import WeatherItem from './WeatherItem';
import getCurrentDate from '../../utils/getCurrentDate';
import unixTimeConverter from '../../utils/unixTimeConverter';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherForecast } from '../../slices/weatherSlice';
import { setLastFetchedCity } from '../../slices/weatherSlice';

const WeatherForecast = () => {
  const { forecast, error, lastFetchedCity } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const storedForecast = localStorage.getItem('lastFetchedForecast');
    const storedCity = localStorage.getItem('lastSearchedCity');

    if (storedCity && storedCity !== lastFetchedCity) {
      dispatch(fetchWeatherForecast(storedCity));
      dispatch(setLastFetchedCity(storedCity));
      return;
    }

    if (storedForecast) {
      const parsedWeather = JSON.parse(storedForecast);
      dispatch({
        type: 'weather/fetchWeatherForecast/fulfilled',
        payload: parsedWeather,
      });
    }
  }, [dispatch, lastFetchedCity]);

  if (error) {
    return (
      <div className='forecast-item'>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!forecast) return null;

  const forecastList = forecast.list.filter((item) => {
    const date = item.dt_txt.split(' '); // date[0] = date, date[1] = time   [ '2021-07-20', '12:00:00' ]
    const currentDate = getCurrentDate();
    return date[0] !== currentDate && date[1] === '12:00:00';
  });

  return (
    <div className='forecast-container'>
      {forecastList.map((item) => (
        <WeatherItem
          key={item.dt}
          data={item}
          dateConverted={unixTimeConverter(item.dt)}
          isCurrent={false}
          icon={item.weather[0].icon}
        />
      ))}
    </div>
  );
};

export default WeatherForecast;
