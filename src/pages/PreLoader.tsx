import gsap from "gsap";
import { useEffect } from "react";
import ImageParallax1 from "../assets/gifs/gifSphere7.gif";
import ImageParallax2 from "../assets/gifs/gifSphere4.gif";
import { WLogo2 } from "../assets/image/logos/W_LOGO2";
import preLoaderBackground1 from "../assets/image/backgrounds/preLoaderBackground.png";
import preLoaderBackground from "../assets/image/backgrounds/preLoaderBackground1.png";
import { StickyImageCardCenter } from "../components/StickyImage";
import { HeaderBackground } from "../styled-components/Gallery.styled";
import {
  PreLoaderContainer,
  PreLoaderContainerLogo,
  PreLoaderContainerText,
  TextPreLoader,
} from "../styled-components/PreLoader.styled";
import { IsDarkProps } from "../components/isDark/types/isDarkType";

export default function PreLoader({ isDark }: IsDarkProps) {
  useEffect(() => {
    const tl = gsap.timeline();

    // Preloader Animation
    const preLoaderAnim = () => {
      tl.to(".texts-container", {
        duration: 0,
        opacity: 1,
        ease: "Power3.easeOut",
      })
        .from(".texts-container span", {
          duration: 1.75,
          delay: 1,
          y: 70,
          skewY: 10,
          stagger: 0.4,
          ease: "Power3.easeOut",
        })
        .to(".texts-container span", {
          duration: 1,
          y: 70,
          skewY: -20,
          stagger: 0.2,
          ease: "Power3.easeOut",
        })
        .to("body", {
          duration: 0.25,
          css: { overflowY: "scroll" },
          ease: "power3.inOut",
        })
        .from(".sub", {
          duration: 0.5,
          opacity: 0,
          y: 80,
          ease: "expo.easeOut",
        })
        .to(
          ".preloader",
          {
            duration: 1,
            height: "0vh",
            ease: "Power3.easeOut",
            onComplete: mobileLanding,
          },
          "-=2"
        )
        .to(".preloader", {
          duration: 0,
          css: { display: "none" },
        });
    };

    const mobileLanding = () => {
      if (window.innerWidth < 763) {
        tl.from(".landing__main2", {
          duration: 1,
          delay: 0,
          opacity: 0,
          y: 80,
          ease: "expo.easeOut",
        });
      }
    };

    preLoaderAnim();
  }, []);

  return (
    <PreLoaderContainer className="preloader gap-[5px] overflow-hidden text-[14px] sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
      <HeaderBackground
        src={isDark ? preLoaderBackground : preLoaderBackground1}
      />
      <StickyImageCardCenter image={isDark ? ImageParallax1 : ImageParallax2} />

      <PreLoaderContainerLogo>
        <WLogo2 width={400} />
      </PreLoaderContainerLogo>

      <PreLoaderContainerText>
        <TextPreLoader>DESIGNER</TextPreLoader>
        <TextPreLoader> / </TextPreLoader>
        <TextPreLoader>ARTIST</TextPreLoader>
        <div className="sub hidden"></div>
      </PreLoaderContainerText>
    </PreLoaderContainer>
  );
}
