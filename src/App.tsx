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
import PreLoader from "./pages/PreLoader";
import isDarkUtils from "./components/utils/isDarkUtils";
import GalleryPage from "./pages/GalleryPage";
import Gallery3DPage from "./components/Gallery3D";
import GalleryImagesPage from "./components/GalleryImages";
import GalleryVideoclipsPage from "./components/GalleryVideoclips";

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);
  const isDark = isDarkUtils(currentTheme);
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
  };

  const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
      <div>
        <PreLoader isDark={isDark} />
        <Header toggleTheme={toggleTheme} isDark={isDark} />
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
          <AppLayout>
            <Routes>
              <Route path="/" element={<Homepage isDark={isDark} />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/bio" element={<BioPage isDark={isDark} />} />
              <Route
                path="/gallery"
                element={<GalleryPage isDark={isDark} />}
              />
              <Route
                path="/3d"
                element={<Gallery3DPage isDark={isDark} />}
              />
              <Route
                path="/images"
                element={<GalleryImagesPage isDark={isDark} />}
              />
              <Route
                path="/videoclips"
                element={<GalleryVideoclipsPage isDark={isDark} />}
              />
            </Routes>
          </AppLayout>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
