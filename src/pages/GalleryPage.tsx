import { Parallax } from "react-scroll-parallax";
import galleryAvatarDark from "../assets/image/avatars/darkAvatarGallery.png";
import LightBackground from "../assets/image/backgrounds/lightBackground.png";
import Drop from "../assets/image/decorations/drop.png";
import Cards3DGallery from "../components/Cards/Cards3DGallery.tsx";
import Card1 from "../assets/image/Titles/title1.png";
import Card2 from "../assets/image/Titles/title2.jpg";
import Card3 from "../assets/image/Titles/title3.jpg";
import Card4 from "../assets/image/Titles/title4.jpg";
import Card5 from "../assets/image/Titles/title5.jpg";
import Card6 from "../assets/image/Titles/title6.jpg";
import { useTheme } from "../context/themeContext.jsx";
import {
  CardGallery,
  CardLinkGallery,
  ContainerGallery,
  DescriptionGallery,
  DescriptionHeaderGallery,
  HeaderGallery,
  ImageGallery,
  ImageHeaderGallery,
  TitleGallery,
  TitleHeaderGallery,
} from "../styled-components/Gallery.styled.tsx";
import {
  BackgroundContainer,
  ParallaxImageDomain,
} from "../styled-components/LandingImage.styled.tsx";
import { useNavigate } from "react-router-dom";

const GalleryPage = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  return (
    <BackgroundContainer>
      <Parallax speed={-20} scale={[0.65, 1]} translateY={["200px", "0px"]}>
        <ParallaxImageDomain
          src={Drop}
          style={{ opacity: 0.1, filter: "blur(1px)" }}
        />
      </Parallax>
      <HeaderGallery>
        <ImageHeaderGallery
          src={isDark ? galleryAvatarDark : LightBackground}
          alt="Gallery Image"
        />
        <TitleHeaderGallery>Gallery Page</TitleHeaderGallery>
        <DescriptionHeaderGallery>
          Explore our collection of beautiful images and descriptions
        </DescriptionHeaderGallery>
      </HeaderGallery>
      <Cards3DGallery />
      <ContainerGallery>
        <CardGallery>
          <ImageGallery src={Card3} alt="Photos" />
          <TitleGallery>Photos</TitleGallery>
          <DescriptionGallery>
            A collection of my best photography work.
          </DescriptionGallery>
          <CardLinkGallery as="button" onClick={() => navigate("/photos")}>
            See more
          </CardLinkGallery>
        </CardGallery>
        <CardGallery>
          <ImageGallery src={Card5} alt="Design" />
          <TitleGallery>Design</TitleGallery>
          <DescriptionGallery>
            Various design projects, from graphic to web design.
          </DescriptionGallery>
          <CardLinkGallery as="button" onClick={() => navigate("/design")}>
            See more
          </CardLinkGallery>
        </CardGallery>
        <CardGallery>
          <ImageGallery src={Card1} alt="Cover CD" />
          <TitleGallery>Cover CD</TitleGallery>
          <DescriptionGallery>
            CD covers and album artwork I've created.
          </DescriptionGallery>
          <CardLinkGallery as="button" onClick={() => navigate("/covers")}>
            See more
          </CardLinkGallery>
        </CardGallery>
        <CardGallery>
          <ImageGallery src={Card4} alt="Logotypes" />
          <TitleGallery>Logotypes</TitleGallery>
          <DescriptionGallery>
            A showcase of logo designs for various brands.
          </DescriptionGallery>
          <CardLinkGallery as="button" onClick={() => navigate("/logos")}>
            See more
          </CardLinkGallery>
        </CardGallery>
        <CardGallery>
          <ImageGallery src={Card6} alt="Videoclips" />
          <TitleGallery>Videoclips</TitleGallery>
          <DescriptionGallery>
            Music and promotional videoclips I've produced.
          </DescriptionGallery>
          <CardLinkGallery as="button" onClick={() => navigate("/videoclips")}>
            See more
          </CardLinkGallery>
        </CardGallery>
        <CardGallery>
          <ImageGallery src={Card2} alt="3D Creations" />
          <TitleGallery>3D Creations</TitleGallery>
          <DescriptionGallery>
            A selection of 3D models, covers, and videos I've created.
          </DescriptionGallery>
          <CardLinkGallery as="button" onClick={() => navigate("/3d")}>
            See more
          </CardLinkGallery>
        </CardGallery>
      </ContainerGallery>
    </BackgroundContainer>
  );
};

export default GalleryPage;
