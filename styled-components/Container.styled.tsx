import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  padding: 0 10px;
  margin: 0 auto;
  overflow: hidden;
`;
export const ContainerWrap = styled.div`
  display: flex;
  justify-content: flex-end; /* Alinea los elementos a la derecha */
  gap: 10px; /* Espacio entre los elementos */
`;

export const ContainerWrapCards = styled.div`
  max-width: 99vw; /* Ancho igual al 100% del ancho de la ventana */
  display: flex;
  gap: 15px; /* Espacio entre los elementos */
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export default Container;
