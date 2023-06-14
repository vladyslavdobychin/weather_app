import getNormalizedDate from '../../utils/getNormalizedDate';
import { useRef, useEffect } from 'react';

const ThreeHourStepItem = ({
  time,
  icon,
  temp,
  data,
  isFocused,
  currentTime,
}) => {
  const iconLink = `https://openweathermap.org/img/wn/${icon}.png`;
  const focused = getNormalizedDate(data.dt) === isFocused;
  const itemRef = useRef(null);

  useEffect(() => {
    if (focused && itemRef.current) {
      itemRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [focused]);

  return (
    <div className={`current-hour ${focused ? 'focused' : ''}`} ref={itemRef}>
      <p>{time}</p>
      <img src={iconLink} alt='weather icon' className='weather-icon' />
      <p>{temp}°С</p>
    </div>
  );
};

export default ThreeHourStepItem;
