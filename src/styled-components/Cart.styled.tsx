import styled from "styled-components";

export const CartContainer = styled.aside`
  background: ${({ theme }) =>
    `linear-gradient(to right, transparent 0%, ${theme.colors.cart} 5%)`};
  display: none;
  padding: 3em 1em;
  position: fixed;
  right: 0px;
  top: 0px;
  width: 10vw;
  max-height: 100vh;
  overflow-y: auto;
  scroll-behavior: auto;
  input[type="checkbox"]:checked ~ & {
    height: 100%;
    display: block;
  }
`;

export const Separator = styled.div`
  margin: 1em 0em;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.topHeader};
  height: 1px;
`;

export const CartImage = styled.img`
  object-fit: cover;
  width: 85%;
`;

export const CartItemContainer = styled.div`
  border-bottom: 1px solid #444;
  padding-bottom: 16px;
  text-align-last: center;
`;

export const CartFooter = styled.footer`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;
export const CartIconNumber = styled.text`
  font-size: 0.7rem;
  justify-content: center;
  align-items: center;
`;

export const CartButton = styled.label`
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  justify-content: center;
  transition: all 0.3s ease;
  font-size: 0.8em;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CartButtonClose = styled.label`
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  display: flex;
  height: auto;
  justify-content: center;
  padding: 4px;
  position: absolute;
  right: 8px;
  top: 8px;
  transition: all 0.3s ease;
  width: 26px;
  z-index: 9999;

  &:hover {
    transform: scale(1.1);
  }
`;
