import styled from "styled-components";

export const LogoSVG = styled.svg<{
  viewBox: string;
  y: string;
  x: string;
  fill?: string;
}>`
  max-width: ${({ width }) => (width ? width + "px" : 160)};
  margin-top: auto;
  margin-bottom: auto;
  fill: ${({ fill, theme }) => fill || theme.colors.icons};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 100px;
  }
  /* Puedes agregar estilos adicionales si es necesario */
`;
