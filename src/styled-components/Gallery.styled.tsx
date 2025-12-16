import { ReactNode } from "react";
import styled from "styled-components";

interface HeaderContainerProps {
  children?: ReactNode;
  backgroundUrl?: string;
}

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

export const HeaderContainer: React.FC<HeaderContainerProps> = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.card};

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const Content = styled.div`
  width: 350px;
  margin-left: 10px;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 10px;
  }
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

export const ContainerGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  padding-top: 4em;
  padding-bottom: 4em;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 10px;
    padding-top: 2em;
    padding-bottom: 2em;
  }
`;

export const CardGallery = styled.div`
  background-color: ${({ theme }) => theme.colors.cart};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto; /* Más alto que ancho */
  transition: transform 0.3s ease;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 14px 20px rgba(0, 0, 0, 0.9);
  }
`;

// Imagen dentro de la card
export const ImageGallery = styled.img`
  width: auto;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
`;

// Título de la card
export const TitleGallery = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.text};
`;

// Descripción de la card
export const DescriptionGallery = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.icons};
  flex-grow: 1;
`;

// Link de la card
export const CardLinkGallery = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.icons};
  background-color: ${({ theme }) => theme.colors.topHeader};
  font-weight: bold;
  margin-top: 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

// Contenedor principal de la cabecera
export const HeaderGallery = styled.header`
  background-color: ${({ theme }) => theme.colors.card};
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 20px;
  }

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
    transition: transform 0.3s ease;
  }
`;

// Título de la cabecera
export const TitleHeaderGallery = styled.h1`
  font-size: 3rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Descripción de la cabecera
export const DescriptionHeaderGallery = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.icons};
  margin-bottom: 20px;
  font-style: italic;
`;

// Imagen decorativa en la cabecera
export const ImageHeaderGallery = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;
