import GalleryContent from "../../components/GalleryContent";
import image1 from "../../assets/image/logos/logo1.jpg";
import image2 from "../../assets/image/logos/logo2.jpg";
import image3 from "../../assets/image/logos/logo3.jpg";
import image4 from "../../assets/image/logos/logo4.jpg";
import image5 from "../../assets/image/logos/logo5.jpg";
//
import background from "../../assets/image/Headers/header2.jpg";

const imagesLogo = [image1, image2, image3, image4, image5];

const GalleryPageLogo = () => {
  return (
    <GalleryContent
      title="Logotypes"
      backgroundUrl={background}
      images={imagesLogo}
    />
  );
};

export default GalleryPageLogo;
