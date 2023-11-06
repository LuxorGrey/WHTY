import { Parallax } from "react-scroll-parallax";
import {
  BackgroundImage,
  FixedImageLeft,
} from "../styled-components/StickyImage.styled";

export const StickyImageBackground = ({ src }: { src: string }) => {
  return (
    <Parallax speed={-45} scale={[1, 0.8]} translateY={["-1500px", "1500px"]}>
      <FixedImageLeft>
        <BackgroundImage src={src} alt="Gotas de agua" />
      </FixedImageLeft>
    </Parallax>
  );
};

export default StickyImageBackground;
