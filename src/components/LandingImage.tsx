import { Parallax } from "react-scroll-parallax";
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
import Drop from "../assets/image/drop.png";
import DarkBackground from "../assets/image/darkBackground.png";
import LightBackground from "../assets/image/lightBackground.png";
import DarkAvatar from "../assets/image/darkAvatar.png";
import LightAvatar from "../assets/image/lightAvatar.png";
interface ParallaxProps {
  theme: string;
}
export const ParallaxImageWithText = ({ theme }: ParallaxProps) => {
  return (
    <ParallaxContainer>
      <Parallax speed={-20} scale={[0.5, 1]} translateY={["-200px", "0px"]}>
        <ParallaxImageDomain src={Drop} />
      </Parallax>
      <Parallax speed={-10} scale={[1.2, 1]}>
        <ParallaxImage
          src={theme === "dark" ? DarkBackground : LightBackground}
          alt="Imagen de parallax"
        />
      </Parallax>
      <TextOverlay>
        <Flex>
          <div>
            <AvatarContainer>
              <AvatarImage
                src={theme === "dark" ? DarkAvatar : LightAvatar}
                alt="Avatar"
              />
            </AvatarContainer>
            <TextHeader>
              {"The Voice of Streets".toLocaleUpperCase()}
            </TextHeader>
            <Text>
              My main goal is to find the most efficient solution to meet the
              presented needs and requirements. Throughout my journey, I have
              developed a problem-solving mindset, allowing me to approach
              challenges with creativity and technical skills
            </Text>
            <Button animated={true}>EXCLUSIVE COLLECTION</Button>
          </div>
        </Flex>
      </TextOverlay>
    </ParallaxContainer>
  );
};

export default ParallaxImageWithText;
