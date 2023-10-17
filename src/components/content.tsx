import { AlienStreetLogo } from "../assets/AlienStreetLogo";
import { WLogo } from "../assets/W_LOGO";
import { WLogo2 } from "../assets/W_LOGO2";

const content = [
  {
    id: 1,
    title: "VOICE OF THE STREET",
    body: "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
    image: "src/assets/image/cardMinimal.png",
    logo: <WLogo2 />,
    borderColor: "red",
    buttonText: "WHTY SHOP",
    hoverImage: "src/assets/image/cardMinimalHover.png",
    parallaxImage: "src/assets/image/orb1.png",
  },
  {
    id: 2,
    title: "STREET ALIENS",
    body: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.. Think of the insightful conversations you miss out on with a feedback form.",
    image: "src/assets/image/cardMinimal2.png",
    logo: <AlienStreetLogo />,
    buttonText: "ALIENS SHOP",
    borderColor: "#399caf",
    hoverImage: "src/assets/image/cardMinimal2Hover.png",
    parallaxImage: "src/assets/image/orb2.png",
  },
  {
    id: 3,
    title: "WHITEDEMON",
    body: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
    image: "src/assets/image/cardMinimal3.png",
    logo: <WLogo />,
    borderColor: "pink",
    buttonText: "FASION SHOP",
    hoverImage: "src/assets/image/cardMinimal3Hover.png",
    parallaxImage: "src/assets/image/orb3.png",
  },
];

export default content;
