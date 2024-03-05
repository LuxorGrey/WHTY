import { ParallaxProvider } from "react-scroll-parallax";
import Drop from "../assets/image/drop.png";
import homeBackground from "../assets/image/homeBackground2.png";
import StickyImageBackground from "../components/BackgroundImage";
import Cards3D from "../components/Cards3D";
import ContainerImagesHome from "../components/ContainerImagesHome";
import ParallaxImageWithText from "../components/LandingImage";
import contentHome from "../mock/contentHome.tsx";
import { HeaderBackground } from "../styled-components/Gallery.styled.tsx";
import { IsDarkProps } from "../components/types/isDarkType.ts";

const Homepage = ({ isDark }: IsDarkProps) => {
  return (
    <ParallaxProvider>
      <ParallaxImageWithText isDark={isDark} />
      <HeaderBackground src={homeBackground} />
      <Cards3D />
      <StickyImageBackground src={Drop} />
      <ContainerImagesHome content={contentHome} />
    </ParallaxProvider>
  );
};

export default Homepage;
