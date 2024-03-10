import { Parallax } from "react-scroll-parallax";
import DarkAvatar from "../assets/image/avatars/darkAvatar.png";
import LightAvatar from "../assets/image/avatars/lightAvatar.png";
import DarkBackground from "../assets/image/backgrounds/darkBackground.png";
import Drop from "../assets/image/decorations//drop.png";
import LightBackground from "../assets/image/backgrounds/lightBackground.png";
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
import { IsDarkProps } from "./isDark/types/isDarkType";
import { useNavigate } from "react-router-dom";

export const ParallaxImageWithText = ({ isDark }: IsDarkProps) => {
  const navigate = useNavigate();
  return (
    <ParallaxContainer>
      <Parallax speed={-20} scale={[0.5, 1]} translateY={["-200px", "0px"]}>
        <ParallaxImageDomain src={Drop} />
      </Parallax>
      <Parallax speed={-10} scale={[1.2, 1]}>
        <ParallaxImage
          src={isDark ? DarkBackground : LightBackground}
          alt="Imagen de parallax"
        />
      </Parallax>
      <TextOverlay>
        <Flex>
          <div>
            <AvatarContainer>
              <AvatarImage
                src={isDark ? DarkAvatar : LightAvatar}
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
            <Button
              onClick={() => navigate("products")}
              animated={true}
            >
              EXCLUSIVE COLLECTION
            </Button>
          </div>
        </Flex>
      </TextOverlay>
    </ParallaxContainer>
  );
};

export default ParallaxImageWithText;
