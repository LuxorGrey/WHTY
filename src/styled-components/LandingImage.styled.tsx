import styled from "styled-components";
import { focusInExpand, scaleIn, scaleOut } from "./animations/animations";
interface AvatarProps {
  image: string;
  size?: string;
}

export const ParallaxContainer = styled.div`
  position: relative;
  height: 600px; /* Altura deseada para la imagen con parallax */
  overflow: hidden;
  border-radius: 1em;
`;

export const ParallaxImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  transform: translateY(-20%);
`;

export const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const AvatarContainer = styled.div<Pick<AvatarProps, "size">>`
  width: ${(props) => (props.size ? props.size : "250px")};
  height: ${(props) => (props.size ? props.size : "250px")};
  border-radius: 50%;
  overflow: hidden;
  animation: ${focusInExpand} 1s ease forwards; // Aplica la animación
  transition: transform 0.3s, filter 0.3s; // Agrega transiciones
  pointer-events: auto;
  &:hover {
    animation: ${scaleIn} 0.3s forwards; // Aplica la animación de escala y desenfoque en hover
  }
  &:not(:hover) {
    animation: ${scaleOut} 0.3s forwards; // Aplica la animación de escala y desenfoque al salir del hover
  }
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
