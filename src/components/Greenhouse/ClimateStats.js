import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';

function ClimateStats() {

  const {tempurature, humidity} = useClimate();

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {tempurature}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;
