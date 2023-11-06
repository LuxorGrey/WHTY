import { ParallaxProvider } from "react-scroll-parallax";
import ContainerImagesHome from "../components/ContainerImagesHome";
import contentBio from "../mock/contentBio.tsx";
import bioAvatar from "../assets/image/bioAvatar.png";
import bioBackground from "../assets/image/bioBackground.png";
import {
  Content,
  HeaderBackground,
  HeaderContainer,
  ProfileImage,
  StyledCardBio,
  Subtitle,
  Title,
} from "../styled-components/Bio.styled.tsx";
import { BackgroundContainer } from "../styled-components/LandingImage.styled.tsx";
import BioBackground from "../components/BioBackground.tsx";

const BioPage = () => {
  return (
    <div>
      <ParallaxProvider>
      <BioBackground/>
        <BackgroundContainer>
          <HeaderContainer>
            <StyledCardBio>
              <ProfileImage src={bioAvatar} alt="Imagen de perfil" />
              <Content>
                <Title>WHAITY STUDIOS™</Title>
                <Subtitle>
                  WHAITY STUDIOS™ es la marca de arte, moda y decoración.
                  Fundada por el artista y diseñador WHAITY.
                </Subtitle>
              </Content>
            </StyledCardBio>
          </HeaderContainer>
          <HeaderBackground src={bioBackground} />
          <ContainerImagesHome content={contentBio} />
        </BackgroundContainer>
      </ParallaxProvider>
    </div>
  );
};

export default BioPage;
