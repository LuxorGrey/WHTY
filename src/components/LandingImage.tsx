import Button from "../styled-components/Button.styled";
import Flex from "../styled-components/Flex.styled";
import {
  AvatarContainer,
  AvatarImage,
  ParallaxContainer,
  TextOverlay,
} from "../styled-components/LandingImage.styled";
import { TextHeader } from "../styled-components/LandingText.styled";
import Parallax from "./Parallax";
export const ParallaxImageWithText = () => {
  return (
    <ParallaxContainer>
      <Parallax />
      <TextOverlay>
        <Flex>
          <div>
            <AvatarContainer>
              <AvatarImage src="src\assets\landingImage.png" alt="Avatar" />
            </AvatarContainer>
            <TextHeader>{"The Voice of Streets".toLocaleUpperCase()}</TextHeader>
            <p>
              My main goal is to find the most efficient solution to meet the
              presented needs and requirements. Throughout my journey, I have
              developed a problem-solving mindset, allowing me to approach
              challenges with creativity and technical skills
            </p>
            <Button>EXCLUSIVE COLLECTION</Button>
          </div>
        </Flex>
      </TextOverlay>
    </ParallaxContainer>
  );
};

export default ParallaxImageWithText;
