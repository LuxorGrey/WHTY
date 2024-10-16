import { useNavigate } from "react-router-dom";
import DarkBackground from "../assets/image/Photos/photo17.jpg";
import LightBackground from "../assets/image/Photos/photo22.jpg";
import Drop from "../assets/image/decorations/drop.png";
import AvatarLight from "../assets/image/Photos/photo11.jpg";
import AvatarDark from "../assets/image/Photos/photo4.jpg";
import Card1 from "../assets/image/Titles/title1.jpg";
import Card2 from "../assets/image/Titles/title2.jpg";
import Card3 from "../assets/image/Titles/title3.jpg";
import Card4 from "../assets/image/Titles/title4.jpg";
import Card5 from "../assets/image/Titles/title5.jpg";
import Card6 from "../assets/image/Titles/title6.jpg";
import ContainerGalleryComponent from "../components/ContainerGallery.tsx";
import HeaderWithParallax from "../components/HeaderWithParallax.tsx";
import { ContainerGallery } from "../styled-components/Gallery.styled.tsx";
import { BackgroundContainer } from "../styled-components/LandingImage.styled.tsx";

const GalleryPage = () => {
  const navigate = useNavigate();

  return (
    <BackgroundContainer>
      <HeaderWithParallax
        titleHeader={"MY GALLERY"}
        descriptionHeader={
          "Explore my gallery, featuring a wide range of content from music, including covers, artwork, videos, and photography, to personal projects. Discover a creative journey that blends artistic expression with personal stories and passions."
        }
        parallaxImage={Drop}
        lightBackground={LightBackground}
        lightAvatar={AvatarLight}
        darkAvatar={AvatarDark}
        darkBackground={DarkBackground}
      />

      <ContainerGallery>
        <ContainerGalleryComponent
          image={Card3}
          handleClick={() => navigate("/photos")}
          title={"Photos"}
          description={"A collection of my best photography work."}
        />
        <ContainerGalleryComponent
          image={Card5}
          handleClick={() => navigate("/design")}
          title={"Design"}
          description={"Various design projects, from graphic to web design."}
        />
        <ContainerGalleryComponent
          image={Card1}
          handleClick={() => navigate("/covers")}
          title={"Cover CD"}
          description={"CD covers and album artwork I've created."}
        />
        <ContainerGalleryComponent
          image={Card4}
          handleClick={() => navigate("/logos")}
          title={"Logotypes"}
          description={"A showcase of logo designs for various brands."}
        />
        <ContainerGalleryComponent
          image={Card6}
          handleClick={() => navigate("/videoclips")}
          title={"Videoclips"}
          description={"Music and promotional videoclips I've produced."}
        />
        <ContainerGalleryComponent
          image={Card2}
          handleClick={() => navigate("/3d")}
          title={"3D Creations"}
          description={
            "A selection of 3D models, covers, and videos I've created."
          }
        />
      </ContainerGallery>
    </BackgroundContainer>
  );
};

export default GalleryPage;
