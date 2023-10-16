import styled from "styled-components";
import {
    trackingInExpand
} from "./animations/animations";

// Define la animación keyframes

export const TextHeader = styled.h1`
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.text};
  pointer-events: auto;
  animation: ${trackingInExpand} 2s ease forwards; // Aplica la animación
  text-shadow: 12px 12px 15px rgba(0, 0, 0, 0.5); // Agrega una sombra al texto
`;
