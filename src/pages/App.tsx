import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider, useTheme } from "../context/themeContext";
import GlobalStyles from "../styled-components/Global";
import AppLayout from "./AppLayout";

// Lazy load de los componentes
const Homepage = lazy(() => import("./Homepage"));
const BioPage = lazy(() => import("./BioPage"));
const GalleryPage = lazy(() => import("./GalleryPage"));

// Lazy load de los nuevos componentes de galería
const GalleryPage3D = lazy(() => import("./GalleryPage3D"));
const GalleryPageVideoclip = lazy(() => import("./GalleryPageVideoclip"));
const GalleryPageDesign = lazy(() => import("./GalleryPageDesign"));
const GalleryPageLogo = lazy(() => import("./GalleryPageLogos"));
const GalleryPagePhotos = lazy(() => import("./GalleryPagePhotos"));
const GalleryPageCover = lazy(() => import("./GalleryPageCover"));

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
      <BrowserRouter>
        <AppLayout>
          <Suspense>
            <Routes>
              {/*Basics */}
              <Route path="/" element={<Homepage />} />
              <Route path="/bio" element={<BioPage />} />
              <Route path="/gallery" element={<GalleryPage />} />

              {/*Gallery */}
              <Route path="/3d" element={<GalleryPage3D />} />
              <Route path="/videoclips" element={<GalleryPageVideoclip />} />
              <Route path="/design" element={<GalleryPageDesign />} />
              <Route path="/logos" element={<GalleryPageLogo />} />
              <Route path="/photos" element={<GalleryPagePhotos />} />
              <Route path="/covers" element={<GalleryPageCover />} />
            </Routes>
          </Suspense>
        </AppLayout>
      </BrowserRouter>
    </StyledThemeProvider>
  );
};

export default App;
