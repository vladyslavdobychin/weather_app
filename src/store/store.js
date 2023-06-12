import { configureStore, getDeafultMiddleware } from '@reduxjs/toolkit';
import weatherReducer  from '../slices/weatherSlice'
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware: (getDeafultMiddleware) => getDeafultMiddleware().concat(loggerMiddleware),
});

export default store;
