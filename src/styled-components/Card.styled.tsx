import { ReactNode } from "react";
import styled from "styled-components";

interface StyledCardProps {
  layout?: string | false;
  children?: ReactNode;
}

export const StyledCard: React.FC<StyledCardProps> = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  flex-direction: ${({ layout }) => layout || "row"};
  text-align-last: center;

  img {
    width: 55%;
  }

  & > div {
    flex: 1;
  }
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); /* Agregar sombra al hacer hover */
    opacity: 0.9; /* Cambiar la opacidad */
    transform: scale(0.99); /* Realizar la animación de escala */
    transition: box-shadow 0.3s, opacity 0.3s, transform 0.3s; /* Agregar transición */
  }

  &:not(:hover) {
    transition: box-shadow 0.3s, opacity 0.3s, transform 0.3s; /* Agregar transición */
    opacity: 1; /* Restaurar la opacidad al salir del hover (sin hover) */
    transform: scale(1);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
export const ImageCard = styled.img`
  &:hover {
    opacity: 0.95;
    transform: scale(0.95);
    transition: opacity 0.3s, transform 0.3s;
  }

  &:not(:hover) {
    transition: opacity 0.3s, transform 0.3s;
    opacity: 1;
    transform: scale(1);
  }
`;

export default StyledCard;
