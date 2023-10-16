import styled from "styled-components";

export const FixedImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1; /* Para que esté por encima del contenido con scroll */
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
