
import Image1 from "../assets/image/cardMinimal6.png";
import ImageParallax1 from "../assets/gifs/gifSphere7.gif";
import ImageHover1 from "../assets/image/cardMinimalHover6.png";
import { WLogo2 } from "../assets/image/logos/W_LOGO2";

import Image2 from "../assets/image/cardMinimal5.png";
import ImageParallax2 from "../assets/gifs/gifSphere2.gif";
import ImageHover2 from "../assets/image/cardMinimalHover5.png";

import Image3 from "../assets/image/cardMinimal4.png";
import ImageParallax3 from "../assets/gifs/gifSphere5.gif";
import ImageHover3 from "../assets/image/cardMinimal4.png";

const content = [
  {
    id: 1,
    title: "WHAITY",
    body: "WHAITY es un artista multidisciplinario de Barcelona cuyo talento se extiende a través del diseño, la fotografía, el graffiti y la moda streetwear.",
    image: Image1,
    hoverImage: ImageHover1,
    parallaxImage: ImageParallax1,
    logo: <></>,
    borderColor: "#ff6600",
    buttonText: "INSTAGRAM",
  },
  {
    id: 2,
    title: "WHAITY STUDIOS™",
    body: "Cada pieza de arte es única y está realizada a mano. La marca es una expresión del street art y streetwear más auténtico y audaz, ofreciendo una colección de productos que son una mezcla de elegancia y actitud rebelde.",
    image: Image2,
    hoverImage: ImageHover2,
    parallaxImage: ImageParallax2,
    logo: <WLogo2 width={450} />,
    borderColor: "#c689ee",
    buttonText: "TIK TOK",
  },
  {
    id: 3,
    title: "WHAITY STUDIOS™",
    body: "Cada pieza de arte es única y está realizada a mano. La marca es una expresión del street art y streetwear más auténtico y audaz, ofreciendo una colección de productos que son una mezcla de elegancia y actitud rebelde.",
    image: Image3,
    hoverImage: ImageHover3,
    parallaxImage: ImageParallax3,
    logo: <WLogo2 width={450} />,
    borderColor: "#ffbd30",
    buttonText: "YOUTUBE",
  },
];

export default content;
