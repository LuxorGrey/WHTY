import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Cards3D from "./components/Cards3D";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ParallaxImageWithText from "./components/LandingImage";
import { StickyImageCard } from "./components/StickyImage";
import content from "./components/content";
import Container from "./styled-components/Container.styled";
import GlobalStyles from "./styled-components/Global";
import { useState } from "react";
import StickyImageBackground from "./components/BackgroundImage";

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
        <ParallaxProvider>
          <GlobalStyles />
          <Header
            toggleTheme={toggleTheme}
            theme={currentTheme === lightTheme ? "light" : "dark"}
          />
          <ParallaxImageWithText  theme={currentTheme === lightTheme ? "light" : "dark"} />
          <Cards3D />
          <Parallax
            speed={-45}
            scale={[1, 0.8]}
            translateY={["-1500px", "1500px"]}
          >
            <StickyImageBackground image={"src/assets/image/drop.png"} />
          </Parallax>
          <Container>
            {content.map((item, index: number) => (
              <div key={index}>
                <Parallax
                  speed={-5}
                  translateX={
                    index % 2 === 0 ? ["25px", "0px"] : ["0px", "25px"]
                  }
                  scale={[0.75, 0.9]}
                >
                  <StickyImageCard image={item.parallaxImage} index={index} />
                </Parallax>
                <Parallax
                  speed={-10}
                  translateX={
                    index % 2 === 0 ? ["25px", "0px"] : ["-25px", "0px"]
                  }
                  scale={[0.95, 1]}
                >
                  <Card item={item} />
                </Parallax>
              </div>
            ))}
          </Container>

          <Footer />
        </ParallaxProvider>
      </>
    </ThemeProvider>
  );
};

export default App;
