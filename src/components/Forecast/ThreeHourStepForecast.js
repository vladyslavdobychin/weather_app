import { useSelector } from 'react-redux';
import unixTimeConverter from '../../utils/unixTimeConverter';
import ThreeHourStepItem from './ThreeHourStepItem';

const ThreeHourStepForecast = () => {
  const { forecast, isFocused, currentTime } = useSelector((state) => state.weather);

  if (!forecast) return null;

  return (
    <div className='three-hour-forecast-container'>
      {forecast.list.map((item) => {
        const time = item.dt_txt.split(' ')[1].slice(0, 5);
        const icon = item.weather[0].icon;

        return (
          <ThreeHourStepItem
            data={item}
            time={time}
            icon={icon}
            temp={item.main.temp}
            key={item.dt}
            isFocused={isFocused}
            currentTime={currentTime}
          />
        );
      })}
    </div>
  );
};

export default ThreeHourStepForecast;
