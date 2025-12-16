import GalleryContent from "../../components/GalleryContent";
import image1 from "../../assets/image/3D/3d1.jpg";
import image2 from "../../assets/image/3D/3d2.jpg";
import image3 from "../../assets/image/3D/3d3.jpg";
import image4 from "../../assets/image/3D/3d4.jpg";
import image5 from "../../assets/image/3D/3d5.jpg";
import image6 from "../../assets/image/3D/3d6.jpg";
import image7 from "../../assets/image/3D/3d7.jpg";
import background from "../../assets/image/Headers/header2.jpg";

const images3D = [image1, image2, image3, image4, image5, image6, image7];

const GalleryPage3D = () => {
  return (
    <GalleryContent
      title="3D Models"
      backgroundUrl={background}
      images={images3D}
    />
  );
};

export default GalleryPage3D;
