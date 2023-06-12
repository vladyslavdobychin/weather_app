import {
  fetchCurrentWeather,
  fetchWeatherForecast,
} from '../slices/weatherSlice';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
  const dispatch = useDispatch();

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    const city = event.target[0].value;
    dispatch(fetchCurrentWeather(city));
    dispatch(fetchWeatherForecast(city));
  };

  return (
    <div>
      <form onSubmit={searchSubmitHandler}>
        <input type='text' placeholder='Enter location' />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
