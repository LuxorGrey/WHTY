import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import bioAvatarLight from "../assets/image/bioAvatarLight.png";
import bioAvatarDark from "../assets/image/bioAvatarDark.png";
import { IsDarkProps } from "../components/types/isDarkType.ts";
import {
  BoxContainer,
  Container,
  ImageContainer,
  Section,
} from "../styled-components/Bio.styled.tsx";
import { WLogo2 } from "../assets/image/logos/W_LOGO2";
import Button from "../styled-components/Button.styled.tsx";
import { useNavigate } from "react-router-dom";
import { ParallaxImageDomain } from "../styled-components/LandingImage.styled.tsx";
import Drop from "../assets/image/drop.png";

const BioPage = ({ isDark }: IsDarkProps) => {
  const navigate = useNavigate();
  return (
    <ParallaxProvider>
      <Section id="about-me">
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
            <p
              style={{
                mixBlendMode: "normal",
                opacity: "0.8",
                textAlign: "left",
                marginBottom: "3em",
              }}
            >
              WHAITY es una marca creativa con una amplia experiencia en el
              mundo del arte digital. Especializada en áreas como el diseño
              tridimensional (3D), la fotomanipulación, la producción de videos
              musicales y la creación de portadas de discos, WHAITY se destaca
              por su capacidad para fusionar la tecnología y la creatividad para
              ofrecer resultados impactantes y originales. La pasión por el arte
              y el compromiso con la excelencia son evidentes en cada proyecto
              que realizamos, convirtiéndola en una referencia en la industria
              del arte digital.
            </p>

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
