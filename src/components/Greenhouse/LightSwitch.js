import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

//added and onClick event for the day and night and
//destructured the useTheme for use in the className
function LightSwitch() {

  const {themeName, setThemeName} = useTheme();

  return (
    <div className={`light-switch ${themeName}`}>
      <div onClick = {() =>setThemeName('day')} className="on">DAY</div>
      <div onClick = {() =>setThemeName('night')} className="off">NIGHT</div>
    </div>
  );
}

export default LightSwitch;
