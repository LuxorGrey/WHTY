import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Cards3D from "./components/Cards3D";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ParallaxImageWithText from "./components/LandingImage";
import StickyImage from "./components/StickyImage";
import content from "./components/content";
import Container from "./styled-components/Container.styled";
import GlobalStyles from "./styled-components/Global";

const theme = {
  colors: {
    header: "#1b1b1b",
    topHeader: "#131313",
    body: "#131313",
    footer: "#252525",
    card: "#202020",
    buttons: "#202020",
    text: "#fafafa",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <ParallaxImageWithText />
        <Cards3D />
        <StickyImage />
        <Container>
          {content.map((item, index: number) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
