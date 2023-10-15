import styled from "styled-components";
import {
  scaleInText,
  scaleOutText,
  trackingInExpand,
} from "./animations/animations";

// Define la animación keyframes

export const TextHeader = styled.h1`
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.text};
  pointer-events: auto;
  animation: ${trackingInExpand} 2s ease forwards; // Aplica la animación
  &:hover {
    animation: ${scaleInText} 0.3s forwards;
  }

  &:not(:hover) {
    animation: ${scaleOutText} 0.3s forwards;
  }
`;
