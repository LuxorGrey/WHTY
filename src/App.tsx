import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styled-components/Global";
import Header from "./components/Header";
import Container from "./styled-components/Container.styled";
import Footer from "./components/Footer";
import Card from "./components/Card";
import content from "./components/content";

const theme = {
  colors: {
    header: "#1b1b1b",
    topHeader: "#131313",
    body: "#131313",
    footer: "#979797",
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
