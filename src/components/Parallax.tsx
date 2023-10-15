import React, { useState, MouseEvent } from "react";
import {
  ParallaxContainer,
  ParallaxImage,
} from "../styled-components/LandingImage.styled";

export const Parallax: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: -125 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    // const { clientX, clientY } = e;
    // const { width, height } = e.currentTarget.getBoundingClientRect();
    // const moveX = (clientX / width - 0.5) * 40; // Ajusta el valor según la cantidad de movimiento deseada
    // const moveY = (clientY / height - 0.5) * 40 - 125; // Ajusta el valor según la cantidad de movimiento deseada
    // setPosition({ x: moveX, y: moveY });
  };

  return (
    <ParallaxContainer onMouseMove={handleMouseMove}>
      <ParallaxImage
        // style={{
        //   transform: `translateY(${position.y}px) translateX(${position.x}px)`,
        // }}
        src="src\assets\prueba.png"
        alt="Imagen de parallax"
      />
    </ParallaxContainer>
  );
};

export default Parallax;
