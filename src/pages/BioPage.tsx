import { useNavigate } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import bioAvatar from "../assets/image/avatars/bioAvatar.png";
import galleryAvatarLight from "../assets/image/avatars/lightAvatarGallery.png";
import bioAvatarDark from "../assets/image/backgrounds/bioAvatarDark.png";
import bioAvatarLight from "../assets/image/backgrounds/bioAvatarLight.png";
import Drop from "../assets/image/decorations/drop.png";
import { WLogo2 } from "../assets/image/logos/W_LOGO2";
import SocialIcons from "../components/SocialIcons.tsx";
import { useTheme } from "../context/themeContext.jsx";
import {
  BoxContainer,
  Container,
  ImageContainer,
  ParagraphBio,
  Section,
} from "../styled-components/Bio.styled.tsx";
import Button from "../styled-components/Button.styled.tsx";
import {
  Content,
  HeaderContainer,
  ProfileImage,
  Subtitle,
  Title,
} from "../styled-components/Gallery.styled.tsx";
import { ParallaxImageDomain } from "../styled-components/LandingImage.styled.tsx";

const BioPage = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  return (
    <Section id="about-me">
      <HeaderContainer>
        <ProfileImage src={isDark ? bioAvatar : galleryAvatarLight} />
        <Content>
          <Title>WHAITY STUDIOS™</Title>
          <Subtitle>
            WHAITY STUDIOS™ es la marca de arte, moda y decoración. Fundada por
            el artista y diseñador WHAITY.
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
        <ImageContainer src={isDark ? bioAvatarDark : bioAvatarLight} />
        <BoxContainer>
          <WLogo2 width={550} margin={0} />
          <ParagraphBio>
            WHAITY es una marca creativa con una amplia experiencia en el mundo
            del arte digital. Especializada en áreas como el diseño
            tridimensional (3D), la fotomanipulación, la producción de videos
            musicales y la creación de portadas de discos, WHAITY se destaca por
            su capacidad para fusionar la tecnología y la creatividad para
            ofrecer resultados impactantes y originales. La pasión por el arte y
            el compromiso con la excelencia son evidentes en cada proyecto que
            realizamos, convirtiéndola en una referencia en la industria del
            arte digital.
          </ParagraphBio>
          <Button onClick={() => navigate("/gallery")}>SHOW GALLERY</Button>
          <SocialIcons />
        </BoxContainer>
      </Container>
    </Section>
  );
};

export default BioPage;
