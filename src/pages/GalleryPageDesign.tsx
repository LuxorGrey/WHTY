import GalleryContent from "../components/GalleryContent";
import image1 from "../assets/image/Design/design1.jpg";
import image2 from "../assets/image/Design/design2.jpg";
import image3 from "../assets/image/Design/design3.jpg";
import image4 from "../assets/image/Design/design4.jpg";
import image5 from "../assets/image/Design/design5.jpg";
import image6 from "../assets/image/Design/design6.jpg";
//
import background from "../assets/image/Headers/header2.jpg";

const imagesDesign = [image1, image2, image3, image4, image5, image6];

const GalleryPageDesign = () => {
  return (
    <GalleryContent
      title="Designs"
      backgroundUrl={background}
      images={imagesDesign}
    />
  );
};

export default GalleryPageDesign;
