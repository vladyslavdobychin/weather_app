import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import { getCurrentWeather, getWeatherForecast } from '../api';
import getNormalizedDate from '../utils/getNormalizedDate';

export const fetchCurrentWeather = createAsyncThunk(
  'weather/fetchCurrentWeather',
  async (location, thunkApi) => {
    const response = await getCurrentWeather(location);
    localStorage.setItem('lastSearchedCity', location);
    localStorage.setItem('lastFetchedWeather', JSON.stringify(response));
    thunkApi.dispatch(setFocused(getNormalizedDate(response.dt)));
    return response;
  }
);

export const fetchWeatherForecast = createAsyncThunk(
  'weather/fetchWeatherForecast',
  async (location) => {
    const response = await getWeatherForecast(location);
    localStorage.setItem('lastSearchedCity', location);
    localStorage.setItem('lastFetchedForecast', JSON.stringify(response));
    return response;
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    currentWeather: null,
    forecast: null,
    loading: false,
    error: null,
    lastFetchedCity: null,
    isFocused: false,
  },
  reducers: {
    setLastFetchedCity: (state, action) => {
      state.lastFetchedCity = action.payload;
    },
    setFocused: (state, action) => {
      state.isFocused = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCurrentWeather.fulfilled, (state, action) => {
        state.currentWeather = action.payload;
        state.loading = false;
      })
      .addCase(fetchCurrentWeather.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(fetchWeatherForecast.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeatherForecast.fulfilled, (state, action) => {
        state.forecast = action.payload;
        state.loading = false;
      })
      .addCase(fetchWeatherForecast.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default weatherSlice.reducer;
export const { setLastFetchedCity, setFocused } = weatherSlice.actions;


