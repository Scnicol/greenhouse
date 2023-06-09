// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { createContext, useContext, useState, useEffect } from 'react';

export const ClimateContext = createContext();

export const useClimate = () => useContext(ClimateContext);


export default function ClimateProvider({ children }) {
    const [tempurature, setTempurature] = useState(50);
    const [humidity, setHumidity] = useState(40);

    useEffect(() => {

    })
    return (
      <ClimateContext.Provider value={{tempurature, setTempurature, humidity, setHumidity}}>
        {children}
      </ClimateContext.Provider>
    );
  }
