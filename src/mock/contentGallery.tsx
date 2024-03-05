import ImageParallax1 from "../assets/gifs/gifSphere7.gif";
import Image1 from "../assets/image/cardMinimal6.png";
import ImageHover1 from "../assets/image/cardMinimalHover6.png";
import ImageParallax2 from "../assets/gifs/gifSphere2.gif";
import Image2 from "../assets/image/cardMinimal5.png";
import ImageHover2 from "../assets/image/cardMinimalHover5.png";

import ImageParallax3 from "../assets/gifs/gifSphere5.gif";
import {
  default as Image3,
  default as ImageHover3,
} from "../assets/image/cardMinimal4.png";

const content = [
  {
    id: 1,
    title: "VIDEOCLIPS/FX",
    body: "WHAITY ha participado en una amplia gama de producciones y ha creado promociones visuales para diversos artistas. Ha colaborado con artistas reconocidos internacionalmente, aportando una visión única a cada proyecto.",
    image: Image2,
    hoverImage: ImageHover2,
    parallaxImage: ImageParallax2,
    logo: <></>,
    borderColor: "#c689ee",
    buttonText: "See more",
  },
  {
    id: 2,
    title: "3D ART",
    body: "WHAITY se ha especializado en la creación de modelos orgánicos e inorgánicos, así como en la producción de videoclips para artistas. Destaca su habilidad para integrar elementos 3D en producciones audiovisuales.",
    image: Image1,
    hoverImage: ImageHover1,
    parallaxImage: ImageParallax1,
    logo: <></>,
    borderColor: "#ff6600",
    buttonText: "See more",
  },
  {
    id: 3,
    title: "IMAGEN",
    body: "WHAITY ha dejado su marca en el mundo del fotomontaje, la creación de portadas de discos y el diseño para revistas. Su enfoque innovador y su atención al detalle le han permitido crear imágenes impactantes que capturan la esencia de sus clientes. ",
    image: Image3,
    hoverImage: ImageHover3,
    parallaxImage: ImageParallax3,
    logo: <></>,
    borderColor: "#ffbd30",
    buttonText: "See more",
  },
];

export default content;
