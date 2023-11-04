import { ParallaxProvider } from "react-scroll-parallax";
import StickyImageBackground from "../components/BackgroundImage";
import ContainerImagesHome from "../components/ContainerImagesHome";
import Drop from "../assets/image/drop.png";
const BioPage = () => {
  return (
    <div>
      <ParallaxProvider>
        <StickyImageBackground src={Drop} />
        <ContainerImagesHome />
      </ParallaxProvider>
    </div>
  );
};

export default BioPage;
