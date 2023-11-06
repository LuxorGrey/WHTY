import { ParallaxProvider } from "react-scroll-parallax";
import Drop from "../assets/image/drop.png";
import homeBackground from "../assets/image/homeBackground2.png";
import StickyImageBackground from "../components/BackgroundImage";
import Cards3D from "../components/Cards3D";
import ContainerImagesHome from "../components/ContainerImagesHome";
import ParallaxImageWithText from "../components/LandingImage";
import contentHome from "../mock/contentHome.tsx";
import { HeaderBackground } from "../styled-components/Bio.styled.tsx";
interface ParallaxProps {
  theme: string;
}
const Homepage = ({ theme }: ParallaxProps) => {
  return (
    <ParallaxProvider>
      {/* <VideoPlayer /> */}
      <ParallaxImageWithText theme={theme} />
      <HeaderBackground src={homeBackground} />
      <Cards3D />
      <StickyImageBackground src={Drop} />
      <ContainerImagesHome content={contentHome} />
    </ParallaxProvider>
  );
};

export default Homepage;
