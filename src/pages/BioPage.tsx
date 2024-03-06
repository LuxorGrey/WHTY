import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import bioAvatarLight from "../assets/image/bioAvatarLight.png";
import bioAvatarDark from "../assets/image/bioAvatarDark.png";
import { IsDarkProps } from "../components/types/isDarkType.ts";
import {
  BoxContainer,
  Container,
  ImageContainer,
  ParagraphBio,
  Section,
} from "../styled-components/Bio.styled.tsx";
import { WLogo2 } from "../assets/image/logos/W_LOGO2";
import Button from "../styled-components/Button.styled.tsx";
import { useNavigate } from "react-router-dom";
import { ParallaxImageDomain } from "../styled-components/LandingImage.styled.tsx";
import Drop from "../assets/image/drop.png";
import galleryAvatarLight from "../assets/image/lightAvatarGallery.png";
import bioAvatar from "../assets/image/bioAvatar.png";
import {
  HeaderContainer,
  ProfileImage,
  Content,
  Title,
  Subtitle,
} from "../styled-components/Gallery.styled.tsx";

const BioPage = ({ isDark }: IsDarkProps) => {
  const navigate = useNavigate();
  return (
    <ParallaxProvider>
      <Section id="about-me">
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
        <Parallax speed={-20} scale={[0.65, 1.5]} translateY={["200px", "0px"]}>
          <ParallaxImageDomain
            src={Drop}
            style={{ opacity: 0.2, filter: " blur(2px)" }}
          />
        </Parallax>
        <Container>
          <ImageContainer>
            <source
              srcSet={isDark ? bioAvatarDark : bioAvatarLight}
              media="(min-width: 1440px)"
            />
            <source
              srcSet={isDark ? bioAvatarDark : bioAvatarLight}
              media="(min-width: 768px)"
            />
            <img
              src={isDark ? bioAvatarDark : bioAvatarLight}
              alt="profile"
              width="100%"
            />
          </ImageContainer>
          <BoxContainer>
            <WLogo2 width={550} margin={0} />
            <ParagraphBio>
              WHAITY es una marca creativa con una amplia experiencia en el
              mundo del arte digital. Especializada en áreas como el diseño
              tridimensional (3D), la fotomanipulación, la producción de videos
              musicales y la creación de portadas de discos, WHAITY se destaca
              por su capacidad para fusionar la tecnología y la creatividad para
              ofrecer resultados impactantes y originales. La pasión por el arte
              y el compromiso con la excelencia son evidentes en cada proyecto
              que realizamos, convirtiéndola en una referencia en la industria
              del arte digital.
            </ParagraphBio>

            <Button onClick={() => navigate("")} animated={true}>
              SHOW GALLERY
            </Button>
          </BoxContainer>
        </Container>
      </Section>
    </ParallaxProvider>
  );
};

export default BioPage;
