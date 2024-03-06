import styled from "styled-components";

export const PortfolioPage = styled.div`
  text-align: top;
`;

export const PortfolioHeader = styled.header` 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MenuContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  width: 100%;
  height: auto;
  justify-content: center;
`;
export const SeparatorVertical = styled.div`
  margin: 0em 0.2em;
  width: 2px;
  background-color: ${({ theme }) => theme.colors.text};
  height: auto;
`;
export const MenuItem = styled.div`
  cursor: pointer;
  padding: 10px; /* Ajusta el espacio alrededor del texto */
`;

export const PageTitle = styled.div`
  align-items: center;
  text-align: center;
  width: 70%;
  height: 70%;
  border-radius: 10px;
  margin: -10px;
`;

export const TextHeader = styled.p`
  text-align: center;
  font-size: 22px;
  width: 884px;
`;

export const PageTitleHeading = styled.h1`
  font-family: "Oxygen", sans-serif;
  font-weight: bold;
  font-size: 60px;
`;
