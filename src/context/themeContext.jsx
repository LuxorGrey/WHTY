import { createContext, useContext, useState } from "react";
import { darkTheme, lightTheme } from "../styles";

const ThemeContext = createContext();

// Hook personalizado para usar el contexto
export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  const isDark = currentTheme === darkTheme;

  const toggleTheme = () => {
    setCurrentTheme(isDark ? lightTheme : darkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
