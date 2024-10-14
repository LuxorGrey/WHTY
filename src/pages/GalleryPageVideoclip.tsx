import GalleryContentVideo from "../components/GalleryContentVideo";

import background from "../assets/image/Headers/header2.jpg";

const imagesLogo = [
  "https://www.youtube.com/watch?v=pGYNpZ9DMN0",
  "https://www.youtube.com/watch?v=8_toq7f2mM4",
  "https://www.youtube.com/watch?v=b2XiyS_ZXfM",
  "https://www.youtube.com/watch?v=VawUjP-9hXU",
  "https://www.youtube.com/watch?v=hQh-nD1u9oU",
];

const GalleryPageVideoclips = () => {
  return (
    <GalleryContentVideo
      title="Videoclips"
      backgroundUrl={background}
      videos={imagesLogo}
    />
  );
};

export default GalleryPageVideoclips;
