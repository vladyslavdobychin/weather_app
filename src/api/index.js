import axios from 'axios';

export const getCurrentWeather = async (location) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=021044969dbd22e777fb1835b345e37f&units=metric`
    );
    return response.data;
  } catch (error) {
    throw new Error('City not found');
  }
};

export const getWeatherForecast = async (location) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=021044969dbd22e777fb1835b345e37f&units=metric`
    );
    return response.data;
  } catch (error) { 
    throw new Error('City not found');
  }
};
