import { useSelector } from 'react-redux';
import ThreeHourStepItem from './ThreeHourStepItem';

const ThreeHourStepForecast = () => {
  const { forecast } = useSelector((state) => state.weather);

  if (!forecast) return null;

  return (
    <div className='three-hour-forecast-container'>
      {forecast.list.map((item) => {
        const time = item.dt_txt.split(' ')[1].slice(0, 5);
        const icon = item.weather[0].icon;

        return (
          <ThreeHourStepItem time={time} icon={icon} temp={item.main.temp} key={item.dt}/>
        );
      })}
    </div>
  );
};

export default ThreeHourStepForecast;
