import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  padding: 0;
  margin: 0 auto;
  overflow: hidden;
`;
export const ContainerWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const ContainerWrapCards = styled.div`
  max-width: 100vw;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none; /* Oculta en pantallas móviles */
  }
`;

export default Container;
