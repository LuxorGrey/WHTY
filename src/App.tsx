import { ReactNode, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CartProvider } from "./context/cart";
import Homepage from "./pages/Homepage";
import { ProductsPage } from "./pages/ProductsPage";
import GlobalStyles from "./styled-components/Global";
import { darkTheme, lightTheme } from "./styles";
import BioPage from "./pages/BioPage";

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
  };

  const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
      <div>
        <Header
          toggleTheme={toggleTheme}
          theme={currentTheme === lightTheme ? "light" : "dark"}
        />
        {children}
        <Footer />
      </div>
    );
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CartProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <AppLayout>
                  <Routes>
                    <Route
                      index
                      element={
                        <Homepage
                          theme={currentTheme === lightTheme ? "light" : "dark"}
                        />
                      }
                    />
                  </Routes>
                </AppLayout>
              }
            />
            <Route
              path="/products"
              element={
                <AppLayout>
                  <ProductsPage />
                </AppLayout>
              }
            />
            <Route
              path="/bio"
              element={
                <AppLayout>
                  <BioPage />
                </AppLayout>
              }
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;