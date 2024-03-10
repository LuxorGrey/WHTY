import { ReactNode, useState, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { CartProvider } from "../context/cart";
import GlobalStyles from "../styled-components/Global";
import { darkTheme, lightTheme } from "../styles";
import PreLoader from "./PreLoader";
import isDarkUtils from "../components/isDark/utils/isDarkUtils";

// Lazy load the components
const Homepage = lazy(() => import("./Homepage"));
const ProductsPage = lazy(() => import("./ProductsPage"));
const BioPage = lazy(() => import("./BioPage"));
const GalleryPage = lazy(() => import("./GalleryPage"));
const Gallery3DPage = lazy(() => import("./Gallery3D"));
const GalleryImagesPage = lazy(() => import("./GalleryImages"));
const GalleryVideoclipsPage = lazy(() => import("./GalleryVideoclips"));

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
            <Suspense fallback={<PreLoader isDark={isDark} />}>
              <Routes>
                <Route path="/" element={<Homepage isDark={isDark} />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/bio" element={<BioPage isDark={isDark} />} />
                <Route
                  path="/gallery"
                  element={<GalleryPage isDark={isDark} />}
                />
                <Route path="/3d" element={<Gallery3DPage isDark={isDark} />} />
                <Route
                  path="/images"
                  element={<GalleryImagesPage isDark={isDark} />}
                />
                <Route
                  path="/videoclips"
                  element={<GalleryVideoclipsPage isDark={isDark} />}
                />
              </Routes>
            </Suspense>
          </AppLayout>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
