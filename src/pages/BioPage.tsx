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
      <Parallax speed={-20} scale={[0.65, 1.5]} translateY={["200px", "0px"]}>
        <ParallaxImageDomain
          src={Drop}
          style={{ opacity: 0.1, filter: " blur(2px)" }}
        />
      </Parallax>
      <HeaderContainer>
        <ProfileImage src={isDark ? bioAvatar : galleryAvatarLight} />
        <Content>
          <Title>WHAITY STUDIOS™</Title>
          <Subtitle>
            WHAITY STUDIOS™ is the art, fashion and decoration brand. Founded by
            artist and designer WHAITY.
          </Subtitle>
        </Content>
      </HeaderContainer>

      <Container>
        <ImageContainer src={isDark ? bioAvatarDark : bioAvatarLight} />
        <BoxContainer>
          <div style={{ alignSelf: "center" }}>
            <WLogo2 width={250} margin={0} />
          </div>
          <ParagraphBio>
            WHAITY is a creative brand with extensive experience in the world of
            digital art. Specialized in areas such as design three-dimensional
            (3D), photomanipulation, video production musicals and the creation
            of album covers, WHAITY stands out for its ability to merge
            technology and creativity to offer impressive and original results.
            The passion for art and commitment to excellence are evident in
            every project we we carry out, making it a reference in the industry
            of digital art
          </ParagraphBio>
          <Button onClick={() => navigate("/gallery")}>SHOW GALLERY</Button>
          <SocialIcons />
        </BoxContainer>
      </Container>
    </Section>
  );
};

export default BioPage;
