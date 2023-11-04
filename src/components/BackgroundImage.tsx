import { Parallax } from "react-scroll-parallax";
import {
  BackgroundImage,
  FixedImage,
} from "../styled-components/StickyImage.styled";
import Drop from "../assets/image/drop.png";

export const StickyImageBackground = () => {
  return (
    <Parallax speed={-45} scale={[1, 0.8]} translateY={["-1500px", "1500px"]}>
      <FixedImage>
        <BackgroundImage src={Drop} alt="Gotas de agua" />
      </FixedImage>
    </Parallax>
  );
};

export default StickyImageBackground;
