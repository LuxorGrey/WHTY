import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider, useTheme } from "../context/themeContext";
import GlobalStyles from "../styled-components/Global";
import { PageContainer } from "../styled-components/PageContainer.styled";
import AppLayout from "./AppLayout";
import PreLoader from "./PreLoader";
import ScrollToTop from "../components/ScrollToTop";

// Lazy load de los componentes
const Homepage = lazy(() => import("./Homepage"));
const BioPage = lazy(() => import("./BioPage"));
const GalleryPage = lazy(() => import("./GalleryPage"));

// Lazy load de los nuevos componentes de galería
const GalleryPage3D = lazy(() => import("./Gallery/GalleryPage3D"));
const GalleryPageVideoclip = lazy(
  () => import("./Gallery/GalleryPageVideoclip")
);
const GalleryPageDesign = lazy(() => import("./Gallery/GalleryPageDesign"));
const GalleryPageLogo = lazy(() => import("./Gallery/GalleryPageLogos"));
const GalleryPagePhotos = lazy(() => import("./Gallery/GalleryPagePhotos"));
const GalleryPageCover = lazy(() => import("./Gallery/GalleryPageCover"));

export const App = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};

// El componente principal que consume el contexto del tema
const ThemedApp = () => {
  const { currentTheme } = useTheme();

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <ParallaxProvider>
        <PreLoader />
        <BrowserRouter>
          <ScrollToTop />
          <AppLayout>
            <Suspense
              fallback={<PageContainer style={{ minHeight: "100vh" }} />}
            >
              <Routes>
                {/*Basics */}
                <Route path="/" element={<Homepage />} />
                <Route path="/bio" element={<BioPage />} />
                <Route path="/gallery" element={<GalleryPage />} />

                {/*Gallery */}
                <Route path="/gallery/3d" element={<GalleryPage3D />} />
                <Route
                  path="/gallery/videoclips"
                  element={<GalleryPageVideoclip />}
                />
                <Route path="/gallery/design" element={<GalleryPageDesign />} />
                <Route path="/gallery/logos" element={<GalleryPageLogo />} />
                <Route path="/gallery/photos" element={<GalleryPagePhotos />} />
                <Route path="/gallery/covers" element={<GalleryPageCover />} />
              </Routes>
            </Suspense>
          </AppLayout>
        </BrowserRouter>
      </ParallaxProvider>
    </StyledThemeProvider>
  );
};

export default App;
