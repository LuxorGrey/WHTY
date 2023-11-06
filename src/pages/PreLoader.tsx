import gsap from "gsap";
import React, { useEffect } from "react";
import ImageParallax1 from "../assets/gifs/gifSphere7.gif";
import { WLogo2 } from "../assets/image/logos/W_LOGO2";
import preLoaderBackground from "../assets/image/preLoaderBackground1.png";
import preLoaderBackground1 from "../assets/image/preLoaderBackground.png";
import { StickyImageCardCenter } from "../components/StickyImage";
import { HeaderBackground } from "../styled-components/Bio.styled";
import {
  PreLoaderContainer,
  PreLoaderContainerLogo,
  PreLoaderContainerText,
  TextPreLoader,
} from "../styled-components/PreLoader.styled";

interface PreLoaderProps {
  theme: string;
}
export default function PreLoader({ theme }: PreLoaderProps) {
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
          duration: 1.5,
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
          duration: 0.01,
          css: { overflowY: "scroll" },
          ease: "power3.inOut",
        })
        .from(".sub", {
          duration: 1,
          opacity: 0,
          y: 80,
          ease: "expo.easeOut",
        })
        .to(
          ".preloader",
          {
            duration: 1.5,
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
  }, []); // Empty dependency array to run the animation only on mount

  return (
    <PreLoaderContainer className="preloader gap-[5px] overflow-hidden text-[14px] sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
      <HeaderBackground
        src={theme === "dark" ? preLoaderBackground : preLoaderBackground1}
      />
      <StickyImageCardCenter image={ImageParallax1} />
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
