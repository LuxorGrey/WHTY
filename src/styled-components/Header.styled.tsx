import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 20px;
  width: 100%;
`;

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.topHeader};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  border-radius: 1em;
  padding: 0 3em;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); /* Agregar sombra al hacer hover */
    transition: box-shadow 0.3s; /* Agregar transición */
  }
  &:not(:hover) {
    transition: box-shadow 0.2s; /* Agregar transición */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0);
  }
`;

export const Logo = styled.img`
  max-width: 150px;
  margin-top: auto;
  margin-bottom: auto;
  
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;

export default StyledHeader;
