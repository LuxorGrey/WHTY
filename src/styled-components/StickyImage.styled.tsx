import styled from "styled-components";

export const FixedImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100; /* Para que esté por encima del contenido con scroll */
  pointer-events: none;
`;
export const FixedImageRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100; /* Para que esté por encima del contenido con scroll */
  pointer-events: none;
`;

export const Image = styled.img`
  width: 100%;

  filter: blur(2px); /* Añade un ligero desenfoque */
  mask: linear-gradient(to bottom, transparent 0%, transparent 30%, black 100%);
  -webkit-mask: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 30%,
    black 100%
  ); /* Añade compatibilidad con navegadores webkit */
`;
export const ImageCard = styled.img`
  width: 100%;

  filter: blur(2px); /* Añade un ligero desenfoque */
  mask: linear-gradient(to bottom, transparent 3%, transparent 70%, black 100%);
  -webkit-mask: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 20%,
    black 75%
  ); /* Añade compatibilidad con navegadores webkit */
`;
export const BackgroundImage = styled.img`
  width: 100%;
  opacity: 0.4;
  filter: blur(5px); /* Añade un ligero desenfoque */

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
