import React from "react";
import {
  ParallaxContainer,
  ParallaxImage,
} from "../styled-components/LandingImage.styled";

export const Parallax: React.FC = () => {
  return (
    <ParallaxContainer>
      <ParallaxImage src="src\assets\prueba.png" alt="Imagen de parallax" />
    </ParallaxContainer>
  );
};

export default Parallax;
