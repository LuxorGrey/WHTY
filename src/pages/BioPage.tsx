import { useNavigate } from "react-router-dom";
import bioAvatar from "../assets/image/avatars/bioAvatar.png";
import galleryAvatarLight from "../assets/image/avatars/lightAvatarGallery.png";
import bioAvatarDark from "../assets/image/backgrounds/bioAvatarDark.png";
import bioAvatarLight from "../assets/image/backgrounds/bioAvatarLight.png";
import Drop from "../assets/image/decorations/drop.png";
import { WLogo2 } from "../assets/image/logos/W_LOGO2";
import HeaderWithParallax from "../components/HeaderWithParallax.tsx";
import SocialIcons from "../components/SocialIcons.tsx";
import { useTheme } from "../context/themeContext.jsx";
import {
  BoxContainer,
  ContainerBio,
  ImageContainer,
  ParagraphBio,
} from "../styled-components/Bio.styled.tsx";
import Button from "../styled-components/Button.styled.tsx";
import { PageContainer } from "../styled-components/PageContainer.styled.tsx";

const BioPage = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  return (
    <PageContainer id="about-me">
      <HeaderWithParallax
        titleHeader={"WHAITY STUDIOS™"}
        descriptionHeader={
          "WHAITY STUDIOS™ is the art, fashion and decoration brand. Founded by artist and designer WHAITY."
        }
        parallaxImage={Drop}
        lightBackground={galleryAvatarLight}
        lightAvatar={galleryAvatarLight}
        darkAvatar={bioAvatar}
        darkBackground={bioAvatar}
      />

      <ContainerBio>
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
      </ContainerBio>
    </PageContainer>
  );
};

export default BioPage;
