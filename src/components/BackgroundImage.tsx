import { Parallax } from "react-scroll-parallax";
import { ParallaxImageDomain } from "../styled-components/LandingImage.styled";

export const StickyImageBackground = ({ src }: { src: string }) => {
  return (
    <Parallax speed={-45} scale={[1, 0.8]} translateY={["-1500px", "1500px"]}>
      <ParallaxImageDomain
        src={src}
        alt="Gotas de agua"
        style={{ opacity: 0.05, filter: " blur(2px)" }}
      />
    </Parallax>
  );
};

export default StickyImageBackground;
