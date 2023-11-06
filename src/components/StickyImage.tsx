import { ImagePreLoader } from "../styled-components/PreLoader.styled";
import {
  FixedImageCenter,
  FixedImageLeft,
  FixedImageRight,
  Image,
  ImageCard,
} from "../styled-components/StickyImage.styled";

export const StickyImage = ({ image }: { image: string }) => {
  return (
    <FixedImageLeft>
      <Image src={image} alt="Gotas de agua" />
    </FixedImageLeft>
  );
};

export const StickyImageCard = ({
  image,
  index = 1,
}: {
  image: string;
  index: number;
}) => {
  return index % 2 === 0 ? (
    <FixedImageLeft>
      <ImageCard src={image} alt="Gotas de agua" />
    </FixedImageLeft>
  ) : (
    <FixedImageRight>
      <ImageCard src={image} alt="Gotas de agua" />
    </FixedImageRight>
  );
};

export const StickyImageCardCenter = ({ image }: { image: string }) => {
  return (
    <FixedImageCenter>
      <ImagePreLoader src={image} alt="Gotas de agua" />
    </FixedImageCenter>
  );
};

export default StickyImage;
