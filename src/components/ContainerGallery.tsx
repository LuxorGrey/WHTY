/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CardGallery,
  CardLinkGallery,
  DescriptionGallery,
  ImageGallery,
  TitleGallery,
} from "../styled-components/Gallery.styled.tsx";

const ContainerGalleryComponent = ({
  image,
  handleClick,
  title,
  description,
}: any) => {
  return (
    <CardGallery>
      <ImageGallery
        src={image}
        alt="Photos"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
      <TitleGallery>{title}</TitleGallery>
      <DescriptionGallery>{description}</DescriptionGallery>
      <CardLinkGallery as="button" onClick={handleClick}>
        See more
      </CardLinkGallery>
    </CardGallery>
  );
};

export default ContainerGalleryComponent;
