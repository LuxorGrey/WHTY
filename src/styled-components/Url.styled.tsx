import styled from "styled-components";

export const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #dddddd;
  transition: transform 0.3s, box-shadow 0.3s;
  font-size: 16px;

  &:hover {
    transform: scale(1.1); /* Aumenta el tamaño en hover */
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* Agrega sombra en hover */
    transition: text-shadow 0.3s, transform 0.2s; /* Agregar transición */
  }

  &:not(:hover) {
    transform: scale(1);
    text-shadow: 0 0 20px rgba(0, 0, 0, 0);
    transition: text-shadow 0.3s, transform 0.2s;
  }

  svg {
    margin-left: 5px; /* Espacio entre el texto y el ícono */
  }
`;
export default StyledLink;
