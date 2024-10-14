import homeBackground from "../assets/image/backgrounds/homeBackground2.png";
import Drop from "../assets/image/decorations/drop.png";
import StickyImageBackground from "../components/BackgroundImage";
import Cards3D from "../components/Cards/Cards3D.tsx";
import ContainerImagesHome from "../components/ContainerImagesHome";
import ParallaxImageWithText from "../components/LandingImage";
import contentHome from "../mock/contentHome.tsx";
import { HeaderBackground } from "../styled-components/Gallery.styled.tsx";

const Homepage = () => {
  return (
    <>
      <ParallaxImageWithText />
      <HeaderBackground src={homeBackground} />
      <Cards3D />
      <StickyImageBackground src={Drop} />
      <ContainerImagesHome content={contentHome} />
    </>
  );
};

export default Homepage;
