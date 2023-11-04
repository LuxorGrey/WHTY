import { ParallaxProvider } from "react-scroll-parallax";
import StickyImageBackground from "../components/BackgroundImage";
import Cards3D from "../components/Cards3D";
import ContainerImagesHome from "../components/ContainerImagesHome";
import ParallaxImageWithText from "../components/LandingImage";
import Drop from "../assets/image/drop.png";
interface ParallaxProps {
  theme: string;
}
const Homepage = ({ theme }: ParallaxProps) => {
  return (
    <div>
      <ParallaxProvider>
        <ParallaxImageWithText theme={theme} />
        <Cards3D />
        <StickyImageBackground src={Drop} />
        <ContainerImagesHome />
      </ParallaxProvider>
    </div>
  );
};

export default Homepage;
