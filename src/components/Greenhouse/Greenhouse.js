import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import { useContext, useEffect, useState } from 'react';
import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

import { ThemeContext } from '../../context/ThemeContext';

function Greenhouse() {

  const {themeName, setThemeName} = useContext(ThemeContext);

  const [timeDay, setTimeDay] = useState(dayImage)


  useEffect(() => {
  if (themeName === 'day') { setTimeDay(dayImage)};
  if (themeName === 'night') { setTimeDay(nightImage)}

  }, [themeName])

  return (
      <section>
        <img className='greenhouse-img'
          src={timeDay}
          alt='greenhouse'
        />
        <LightSwitch />
        <ClimateStats />
      </section>
  );
}

export default Greenhouse;
