import { AlienStreetLogo } from "../assets/image/logos/AlienStreetLogo";
import { WLogo } from "../assets/image/logos/W_LOGO";
import { WLogo2 } from "../assets/image/logos/W_LOGO2";
import Image1 from "../assets/image/cardMinimal1.png";
import ImageHover1 from "../assets/image/cardMinimalHover1.png";
import ImageParallax1 from "../assets/gifs/hearth.gif";

import Image2 from "../assets/image/cardMinimal2.png";
import ImageHover2 from "../assets/image/cardMinimalHover2.png";
import ImageParallax2 from "../assets/gifs/gifSphere6.gif";

import Image3 from "../assets/image/cardMinimal3.png";
import ImageHover3 from "../assets/image/cardMinimalHover3.png";
import ImageParallax3 from "../assets/gifs/gifSphere4.gif";

const content = [
  {
    id: 1,
    title: "VOICE OF THE STREET",
    body: "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
    image: Image1,
    hoverImage: ImageHover1,
    parallaxImage: ImageParallax1,
    logo: <WLogo2 width={450} />,
    borderColor: "red",
    buttonText: "WHTY SHOP",
  },
  {
    id: 2,
    title: "STREET ALIENS",
    body: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.. Think of the insightful conversations you miss out on with a feedback form.",
    image: Image2,
    hoverImage: ImageHover2,
    parallaxImage: ImageParallax2,
    logo: <AlienStreetLogo width={450} />,
    buttonText: "ALIENS SHOP",
    borderColor: "#399caf",
  },
  {
    id: 3,
    title: "WHITEDEMON",
    body: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
    image: Image3,
    hoverImage: ImageHover3,
    parallaxImage: ImageParallax3,
    logo: <WLogo width={450} />,
    borderColor: "pink",
    buttonText: "FASION SHOP",
  },
];

export default content;
