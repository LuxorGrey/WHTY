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

export const BackgroundContainer = styled.div`
  position: relative;
  height: auto; /* Altura deseada para la imagen con parallax */
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
  opacity: 0.5;

  /* Propiedades para hacer que la imagen no sea interactiva ni seleccionable */
  user-select: none;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    object-fit: cover;
    width: auto;
    height: 1000px;
  }
`;
export const ParallaxImageDomain = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  opacity: 0.8;
  object-fit: cover; /* Asegura que la imagen cubra el contenedor */

  /* Propiedades para hacer que la imagen no sea interactiva ni seleccionable */
  user-select: none;
  pointer-events: none;

  @media (max-width: 768px) {
    opacity: 0.7;
  }

  @media (max-width: 480px) {
    opacity: 0.6;
  }
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
  animation: ${focusInExpand} 1s ease forwards;
  transition: transform 0.3s, filter 0.3s;
  pointer-events: auto;
  &:hover {
    animation: ${scaleIn} 0.3s forwards;
  }
  &:not(:hover) {
    animation: ${scaleOut} 0.3s forwards;
  }
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
