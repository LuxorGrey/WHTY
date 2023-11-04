import styled from "styled-components";
import { trackingInExpand } from "./animations/animations";

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  width: 100%;
  height: auto;
`;
export const SeparatorVertical = styled.div`
  margin: 0em 0.2em;
  width: 2px;
  background-color: ${({ theme }) => theme.colors.text};
  height: auto;
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: color 0.3s;
  font-size: 0.9rem;
  &:hover {
    color:${({ theme }) => theme.colors.icons};
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  animation: ${trackingInExpand} 1s ease forwards;
`;
