import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CartProvider } from "./context/cart";
import Homepage from "./pages/Homepage";
import { ProductsPage } from "./pages/ProductsPage";
import GlobalStyles from "./styled-components/Global";
import { darkTheme, lightTheme } from "./styles";

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CartProvider>
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
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
