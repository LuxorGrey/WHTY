import styled from "styled-components";

export const CartFooterContainer = styled.div`
  padding-top: 0.5em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonCart = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.topHeader};
  cursor: pointer;
`;
