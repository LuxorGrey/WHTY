import {
  BackgroundImage,
  FixedImage,
} from "../styled-components/StickyImage.styled";

export const StickyImageBackground = ({ image }: { image: string }) => {
  return (
    <FixedImage>
      <BackgroundImage src={image} alt="Gotas de agua" />
    </FixedImage>
  );
};

export default StickyImageBackground;
