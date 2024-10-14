import GalleryContent from "../components/GalleryContent";
import image1 from "../assets/image/Photos/photo1.jpg";
import image2 from "../assets/image/Photos/photo2.jpg";
import image3 from "../assets/image/Photos/photo3.jpg";
import image4 from "../assets/image/Photos/photo4.jpg";
import image5 from "../assets/image/Photos/photo5.jpg";
import image6 from "../assets/image/Photos/photo6.jpg";
import image7 from "../assets/image/Photos/photo7.jpg";
import image8 from "../assets/image/Photos/photo8.jpg";
import image9 from "../assets/image/Photos/photo9.jpg";
import image10 from "../assets/image/Photos/photo10.jpg";
import image11 from "../assets/image/Photos/photo11.jpg";
import image12 from "../assets/image/Photos/photo12.jpg";
import image13 from "../assets/image/Photos/photo13.jpg";
import image14 from "../assets/image/Photos/photo14.jpg";
import image15 from "../assets/image/Photos/photo15.jpg";
import image16 from "../assets/image/Photos/photo16.jpg";
import image17 from "../assets/image/Photos/photo17.jpg";
import image18 from "../assets/image/Photos/photo18.jpg";
import image19 from "../assets/image/Photos/photo19.jpg";
import image20 from "../assets/image/Photos/photo20.jpg";
import image21 from "../assets/image/Photos/photo21.jpg";
import image22 from "../assets/image/Photos/photo22.jpg";
//
import background from "../assets/image/Headers/header2.jpg";

const imagesPhoto = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
];

const GalleryPagePhotos = () => {
  return (
    <GalleryContent
      title="Photos"
      backgroundUrl={background}
      images={imagesPhoto}
    />
  );
};

export default GalleryPagePhotos;
