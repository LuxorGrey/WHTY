import styled from "styled-components";
import { trackingInExpand } from "./animations/animations";

// Define la animación keyframes

export const TextHeader = styled.h1`
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.text};
  pointer-events: auto;
  animation: ${trackingInExpand} 2s ease forwards; // Aplica la animación
  text-shadow: 12px 12px 15px rgba(0, 0, 0, 0.5);
  font-size: 35px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 20px;
  }
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5); 
  padding-bottom: 20px;
  font-size: 18px;
   @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 15px;
  }
`;
