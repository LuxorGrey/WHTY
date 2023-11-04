import { useNavigate } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import StickyImageBackground from "../components/BackgroundImage";
import Cards3D from "../components/Cards3D";
import ContainerImagesHome from "../components/ContainerImagesHome";
import ParallaxImageWithText from "../components/LandingImage";

interface ParallaxProps {
  theme: string;
}
const Homepage = ({ theme }: ParallaxProps) => {
  const navigate = useNavigate();
  return (
    <div>
      <ParallaxProvider>
        <ParallaxImageWithText theme={theme} />
        <Cards3D />
        <StickyImageBackground />
        <ContainerImagesHome />
      </ParallaxProvider>
      <button onClick={() => navigate("/products")}>Click here</button>
    </div>
  );
};

export default Homepage;
