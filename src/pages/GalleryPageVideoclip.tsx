import GalleryContent from "../components/GalleryContent";
import image1 from "../assets/image/Logos/logo1.jpg";
import image2 from "../assets/image/Logos/logo2.jpg";
import image3 from "../assets/image/Logos/logo3.jpg";
import image4 from "../assets/image/Logos/logo4.jpg";
import image5 from "../assets/image/Logos/logo5.jpg";
//
import background from "../assets/image/Headers/header2.jpg";

const imagesLogo = [image1, image2, image3, image4, image5];

const GalleryPageVideoclips = () => {
  return (
    <GalleryContent
      title="Videoclips"
      backgroundUrl={background}
      images={imagesLogo}
    />
  );
};

export default GalleryPageVideoclips;
