import { ReactNode } from "react";
import styled from "styled-components";

interface HeaderContainerProps {
  children?: ReactNode;
  backgroundUrl?: string;
}

export const HeaderContainer: React.FC<HeaderContainerProps> = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: #fff;
  height: 300px;
  overflow: hidden;
`;

export const HeaderBackground = styled.img`
  background-size: cover;
  background-position: center;
  object-fit: cover;
  position: absolute;
  width: 100%;
  height: auto;
  opacity: 0.2;
  filter: blur(5px);
  left: 0;
`;
export const VideoBackground = styled.video`
  background-size: cover;
  background-position: center;
  object-fit: cover;
  position: absolute;
  width: 100%;
  height: auto;
  opacity: 0.2;
  filter: blur(5px);
  left: 0;
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const StyledCardBio = styled.div`
  display: flex;
  padding: 1% 25%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  text-align-last: center;

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
    font-size: 25px;
  }
`;

export const Content = styled.div`
  width: 350px;
  margin-left: 10px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.p`
  font-size: 0.7rem;
  margin: 0;
  margin-top: 0.5em;
  color: ${({ theme }) => theme.colors.text};
`;
