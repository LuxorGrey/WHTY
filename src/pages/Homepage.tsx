import { useNavigate } from "react-router-dom";
import DarkAvatar from "../assets/image/avatars/darkAvatar.png";
import LightAvatar from "../assets/image/avatars/lightAvatar.png";
import DarkBackground from "../assets/image/backgrounds/darkBackground.png";
import homeBackground from "../assets/image/backgrounds/homeBackground2.png";
import LightBackground from "../assets/image/backgrounds/lightBackground.png";
import Drop from "../assets/image/decorations/drop.png";
import StickyImageBackground from "../components/BackgroundImage";
import Cards3D from "../components/Cards/Cards3D.tsx";
import ContainerImagesHome from "../components/ContainerImagesHome";
import HeaderWithParallax from "../components/HeaderWithParallax.tsx";
import contentHome from "../mock/contentHome.tsx";
import { HeaderBackground } from "../styled-components/Gallery.styled.tsx";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderWithParallax
        buttonOnClick={() => navigate("bio")}
        buttonHeader={"CONTACT US"}
        titleHeader={"The Voice of Streets"}
        descriptionHeader={
          "My main goal is to find the most efficient solution to meet the presented needs and requirements. Throughout my journey, I have developed a problem-solving mindset, allowing me to approach challenges with creativity and technical skills"
        }
        parallaxImage={Drop}
        lightBackground={LightBackground}
        lightAvatar={LightAvatar}
        darkAvatar={DarkAvatar}
        darkBackground={DarkBackground}
      />
      <HeaderBackground src={homeBackground} />
      <Cards3D />
      <StickyImageBackground src={Drop} />
      <ContainerImagesHome content={contentHome} />
    </>
  );
};

export default Homepage;
