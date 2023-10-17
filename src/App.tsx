import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Homepage from "./Homepage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GlobalStyles from "./styled-components/Global";

const darkTheme = {
  colors: {
    header: "#1b1b1b",
    topHeader: "#131313",
    body: "#131313",
    footer: "#252525",
    card: "#2020203b",
    buttons: "#202020",
    text: "#eeeeee",
    icons: "#cacaca",
  },
  mobile: "768px",
};

const lightTheme = {
  colors: {
    header: "#f0f0f0",
    topHeader: "#dfdfdf",
    body: "#e6e6e6",
    footer: "#eeeeee",
    card: "#aaaaaa3a",
    buttons: "#363636",
    text: "#1f1f1f",
    icons: "#2c2c2c",
  },
  mobile: "768px",
};

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <>
        <GlobalStyles />
        <Header
          toggleTheme={toggleTheme}
          theme={currentTheme === lightTheme ? "light" : "dark"}
        />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Homepage
                  theme={currentTheme === lightTheme ? "light" : "dark"}
                />
              }
            />
          </Routes>
        </BrowserRouter>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
