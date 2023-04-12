import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

//This creates a useTheme that already uses the context so we don't have to
//write it in each of our components
export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState("day");

  return (
    <ThemeContext.Provider value={{themeName, setThemeName}}>
      {children}
    </ThemeContext.Provider>
  );
}
