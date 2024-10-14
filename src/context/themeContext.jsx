import { createContext, useContext, useState, useEffect } from "react";
import { darkTheme, lightTheme } from "../styles";

// Crear el contexto del tema
const ThemeContext = createContext();

// Hook personalizado para usar el contexto del tema
export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  // Leer el tema guardado en localStorage o usar el tema oscuro por defecto
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" ? lightTheme : darkTheme;
  };

  // Estado del tema actual
  const [currentTheme, setCurrentTheme] = useState(getInitialTheme);

  // Verifica si el tema actual es oscuro
  const isDark = currentTheme === darkTheme;

  // Cambiar el tema y guardar en localStorage
  const toggleTheme = () => {
    const newTheme = isDark ? lightTheme : darkTheme;
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", isDark ? "light" : "dark");
  };

  // Cuando el componente se monta, establece el tema inicial según localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setCurrentTheme(savedTheme === "light" ? lightTheme : darkTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
