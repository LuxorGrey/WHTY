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
interface ParallaxProps {
  theme: string;
}
export const ParallaxImageWithText = ({ theme }: ParallaxProps) => {
  return (
    <ParallaxContainer>
      <Parallax speed={-20} scale={[0.5, 1]} translateY={["-200px", "0px"]}>
        <ParallaxImageDomain src="src/assets/image/drop.png" />
      </Parallax>
      <Parallax speed={-10} scale={[1.2, 1]}>
        <ParallaxImage
          src={
            theme === "dark"
              ? "src/assets/image/darkBackground.png"
              : "src/assets/image/lightBackground.png"
          }
          alt="Imagen de parallax"
        />
      </Parallax>
      <TextOverlay>
        <Flex>
          <div>
            <AvatarContainer>
              <AvatarImage
                src={
                  theme === "dark"
                    ? "src/assets/image/darkAvatar.png"
                    : "src/assets/image/lightAvatar.png"
                }
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
