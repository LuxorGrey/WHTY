import {
  FixedImage,
  FixedImageRight,
  Image,
  ImageCard,
} from "../styled-components/StickyImage.styled";

export const StickyImage = ({ image }: { image: string }) => {
  return (
    <FixedImage>
      <Image src={image} alt="Gotas de agua" />
    </FixedImage>
  );
};

export const StickyImageCard = ({
  image,
  index,
}: {
  image: string;
  index: number;
}) => {
  return index % 2 === 0 ? (
    <FixedImage>
      <ImageCard src={image} alt="Gotas de agua" />
    </FixedImage>
  ) : (
    <FixedImageRight>
      <ImageCard src={image} alt="Gotas de agua" />
    </FixedImageRight>
  );
};

export default StickyImage;
