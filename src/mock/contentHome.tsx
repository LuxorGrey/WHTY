import { AlienStreetLogo } from "../assets/image/logos/AlienStreetLogo";
import { WLogo } from "../assets/image/logos/W_LOGO";
import { WLogo2 } from "../assets/image/logos/W_LOGO2";
import Image1 from "../assets/image/sections/cardMinimal1.png";
import ImageHover1 from "../assets/image/sections/cardMinimalHover1.png";
import ImageParallax1 from "../assets/gifs/hearth.gif";

import Image2 from "../assets/image/sections/cardMinimal2.png";
import ImageHover2 from "../assets/image/sections/cardMinimalHover2.png";
import ImageParallax2 from "../assets/gifs/gifSphere6.gif";

import Image3 from "../assets/image/sections/cardMinimal3.png";
import ImageHover3 from "../assets/image/sections/cardMinimalHover3.png";
import ImageParallax3 from "../assets/gifs/gifSphere4.gif";

const content = [
  {
    id: 1,
    title: "VOICE OF THE STREET",
    body: " Discover the unique art of WHTY, offering an intimate look into their life, creative process, and the emotions that shape their work. Explore their personal universe and its impact on modern culture.",
    image: Image1,
    hoverImage: ImageHover1,
    parallaxImage: ImageParallax1,
    logo: <WLogo2 width={450} />,
    borderColor: "red",
    buttonText: "WHTY ACCOUNT",
    urlButton: "https://www.instagram.com/whaitystudios/",
  },
  {
    id: 2,
    title: "STREET ALIENS",
    body: "Immerse yourself in the fascinating world of Street Aliens, where undiscovered life forms roam the streets. Witness alien creatures in an urban setting filled with mystery and wonder.",
    image: Image2,
    hoverImage: ImageHover2,
    parallaxImage: ImageParallax2,
    logo: <AlienStreetLogo width={450} />,
    buttonText: "ALIENS ACCOUNT",
    borderColor: "#399caf",
    urlButton: "https://www.instagram.com/streetaliens/",
  },
  {
    id: 3,
    title: "WHAITY LAB",
    body: "Explore the latest trends in accessories and fashion at Whaity Lab. Discover how WHTY is redefining style with cutting-edge designs, blending art and avant-garde fashion.",
    image: Image3,
    hoverImage: ImageHover3,
    parallaxImage: ImageParallax3,
    logo: <WLogo width={450} />,
    borderColor: "pink",
    buttonText: "FASHION ACCOUNT",
    urlButton: "https://www.instagram.com/whaity.lab/",
  },
];

export default content;
