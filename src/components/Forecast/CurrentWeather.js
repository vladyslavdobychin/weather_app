import WeatherItem from './WeatherItem';
import unixTimeConverter from '../../utils/unixTimeConverter';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentWeather } from '../../slices/weatherSlice';
import { setLastFetchedCity } from '../../slices/weatherSlice';

const CurrentWeather = () => {
  const { currentWeather, error, lastFetchedCity } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const storedWeather = localStorage.getItem('lastFetchedWeather');
    const storedCity = localStorage.getItem('lastSearchedCity');

    if (storedCity && storedCity !== lastFetchedCity) {
      dispatch(fetchCurrentWeather(storedCity));
      dispatch(setLastFetchedCity(storedCity));
      return;
    }

    if (storedWeather) {
      const parsedWeather = JSON.parse(storedWeather);
      dispatch({
        type: 'weather/fetchCurrentWeather/fulfilled',
        payload: parsedWeather,
      });
    }
  }, [dispatch, lastFetchedCity]);

  if (error) {
    return (
      <div className='forecast-item '>
        <p>Error: {error}</p>;
      </div>
    );
  }

  if (!currentWeather) return null;

  const dateConverted = unixTimeConverter(currentWeather.dt);

  return (
    <WeatherItem
      data={currentWeather}
      dateConverted={dateConverted}
      isCurrent={true}
      icon={currentWeather.weather[0].icon}
    />
  );
};

export default CurrentWeather;
