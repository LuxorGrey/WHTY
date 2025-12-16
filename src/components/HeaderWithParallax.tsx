import { Parallax } from "react-scroll-parallax";

import { useTheme } from "../context/themeContext";
import Button from "../styled-components/Button.styled";
import Flex from "../styled-components/Flex.styled";
import {
  AvatarContainer,
  AvatarImage,
  ParallaxContainer,
  ParallaxImage,
  ParallaxImageDomain,
  TextOverlay,
} from "../styled-components/LandingImage.styled";
import { Text, TextHeader } from "../styled-components/LandingText.styled";

export const HeaderWithParallax = ({
  parallaxImage,
  lightBackground,
  darkBackground,
  lightAvatar,
  darkAvatar,
  titleHeader,
  descriptionHeader,
  buttonHeader,
  buttonOnClick, // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) => {
  const { isDark } = useTheme();

  return (
    <ParallaxContainer>
      <Parallax speed={-20} scale={[0.5, 1.5]} translateY={["-400px", "200px"]}>
        <ParallaxImageDomain
          src={parallaxImage}
          style={{ opacity: 0.2, filter: " blur(1px)" }}
        />
      </Parallax>
      <Parallax speed={-5} scale={[1, 1.5]} translateY={["-200px", "200px"]}>
        <ParallaxImage
          style={{ opacity: 0.2, filter: " blur(3px)" }}
          src={isDark ? darkBackground : lightBackground}
          alt="Imagen de parallax"
        />
      </Parallax>
      <TextOverlay>
        <Flex>
          <div>
            <AvatarContainer>
              <AvatarImage
                src={isDark ? darkAvatar : lightAvatar}
                alt="Avatar"
              />
            </AvatarContainer>
            <TextHeader>{titleHeader?.toLocaleUpperCase()}</TextHeader>
            <Text>{descriptionHeader}</Text>
            {buttonHeader && (
              <Button onClick={buttonOnClick} $animated={true}>
                {buttonHeader}
              </Button>
            )}
          </div>
        </Flex>
      </TextOverlay>
    </ParallaxContainer>
  );
};

export default HeaderWithParallax;
