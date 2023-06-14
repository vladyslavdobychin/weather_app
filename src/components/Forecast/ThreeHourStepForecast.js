import { useSelector } from 'react-redux';
import unixTimeConverter from '../../utils/unixTimeConverter';
import ThreeHourStepItem from './ThreeHourStepItem';

const ThreeHourStepForecast = () => {
  const { forecast, isFocused } = useSelector((state) => state.weather);

  if (!forecast) return null;

  return (
    <div className='three-hour-forecast-container'>
      {forecast.list.map((item) => {
        const time = item.dt_txt.split(' ')[1].slice(0, 5);
        const icon = item.weather[0].icon;
        const dateConverted = unixTimeConverter(item.dt);

        return (
          <ThreeHourStepItem time={time} icon={icon} temp={item.main.temp} key={item.dt} dateConverted={dateConverted} isFocused={isFocused}/>
        );
      })}
    </div>
  );
};

export default ThreeHourStepForecast;
