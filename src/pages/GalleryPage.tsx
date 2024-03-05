import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import galleryAvatarDark from "../assets/image/darkAvatarGallery.png";
import Drop from "../assets/image/drop.png";
import galleryAvatarLight from "../assets/image/lightAvatarGallery.png";
import LightBackground from "../assets/image/lightBackground.png";
import ContainerImagesHome from "../components/ContainerImagesHome.tsx";
import bioAvatar from "../assets/image/bioAvatar.png";
import { IsDarkProps } from "../components/types/isDarkType.ts";
import contentGallery from "../mock/contentGallery.tsx";
import {
  Content,
  HeaderBackground,
  HeaderContainer,
  ProfileImage,
  Subtitle,
  Title,
} from "../styled-components/Gallery.styled.tsx";
import {
  BackgroundContainer,
  ParallaxImageDomain,
} from "../styled-components/LandingImage.styled.tsx";

const GalleryPage = ({ isDark }: IsDarkProps) => {
  return (
    <ParallaxProvider>
      <BackgroundContainer>
        <Parallax speed={-20} scale={[0.65, 1.5]} translateY={["200px", "0px"]}>
          <ParallaxImageDomain
            src={Drop}
            style={{ opacity: 0.6, filter: " blur(5px)" }}
          />
        </Parallax>
        <HeaderContainer>
          <ProfileImage src={isDark ? bioAvatar : galleryAvatarLight} />
          <Content>
            <Title>WHAITY STUDIOS™</Title>
            <Subtitle>
              WHAITY STUDIOS™ es la marca de arte, moda y decoración. Fundada
              por el artista y diseñador WHAITY.
            </Subtitle>
          </Content>
        </HeaderContainer>
        <Parallax speed={-20} scale={[0.65, 1]} translateY={["200px", "0px"]}>
          <ParallaxImageDomain
            src={Drop}
            style={{ opacity: 0.4, filter: " blur(2px)" }}
          />
        </Parallax>
        <HeaderBackground src={isDark ? galleryAvatarDark : LightBackground} />
        <ContainerImagesHome content={contentGallery} />
      </BackgroundContainer>
    </ParallaxProvider>
  );
};

export default GalleryPage;
