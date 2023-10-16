import { ReactNode } from "react";
import styled from "styled-components";

interface StyledCardProps {
  layout?: string | false;
  children?: ReactNode;
  borderColor?: string;
}

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px; /* Ajusta el ancho máximo según tus necesidades */
  margin: 0 auto; /* Centra el contenido horizontalmente */
`;

export const ImageCardLogo = styled.img`
  width: 100%;
  max-width: 800px; /* Ajusta el ancho máximo de la imagen */
  &:hover {
    transform: scale(1.1); /* Realizar la animación de escala */
    transition: transform 0.9s; /* Agregar transición */
  }

  &:not(:hover) {
    transform: scale(0.9); /* Realizar la animación de escala */
    transition: transform 0.9s; /* Agregar transición */
  }
`;

export const TextCardTitle: React.FC<StyledCardProps> = styled.h1`
  text-align: center; /* Centra el texto horizontalmente */
  color: ${(props) => props?.borderColor};
  text-shadow: 0 0 10px rgba(0, 10, 10, 0.45);
`;
export const TextCard = styled.p`
  text-align: center; /* Centra el texto horizontalmente */
`;

export const StyledCard: React.FC<StyledCardProps> = styled.div`
  flex-direction: ${({ layout }) => layout ?? "row"};
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 5px 0;
  text-align-last: center;
  border-bottom: solid ${(props) => props?.borderColor || "red"} 2px;

  img {
    width: 55%;
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
  max-width: 35vw;
  &:hover {
    opacity: 0.95;
    transform: scale(0.99);
    transition: opacity 0.3s, transform 0.3s;
  }

  &:not(:hover) {
    transition: opacity 0.3s, transform 0.3s;
    opacity: 1;
    transform: scale(1);
  }
`;

export default StyledCard;
