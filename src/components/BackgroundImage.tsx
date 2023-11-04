import { Parallax } from "react-scroll-parallax";
import {
  BackgroundImage,
  FixedImage,
} from "../styled-components/StickyImage.styled";

export const StickyImageBackground = ({ src }: { src: string }) => {
  return (
    <Parallax speed={-45} scale={[1, 0.8]} translateY={["-1500px", "1500px"]}>
      <FixedImage>
        <BackgroundImage src={src} alt="Gotas de agua" />
      </FixedImage>
    </Parallax>
  );
};

export default StickyImageBackground;
