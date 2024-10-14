import styled from "styled-components";
import { trackingInExpand } from "./animations/animations";

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  width: auto;
  height: auto;
  padding: 0; /* Elimina el padding del ul */
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
    color: ${({ theme }) => theme.colors.icons};
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  animation: ${trackingInExpand} 1s ease forwards;
`;

export const NavLinkLocal = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: color 0.3s;
  font-size: 0.9rem;
  &:hover {
    color: ${({ theme }) => theme.colors.icons};
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Aumenta el tamaño del texto en móvil */
  }
`;

// Contenedor del header principal
export const StyledHeader = styled.header`
  width: 100%;
  padding: 1rem;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContainerHeader = styled.div`
  max-width: 100%;
  padding: 0;
  margin: 0 auto;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.header};
  border-radius: 1rem;
`;

// Estilos para el contenedor del nav (barra de navegación)
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .desktop-menu {
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
      display: none; /* Esconder el menú de escritorio en pantallas pequeñas */
    }
  }
`;

// Icono de menú hamburguesa para pantallas móviles
export const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;
  z-index: 10;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Menú desplegable en pantallas móviles
export const MobileNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 1rem;
  z-index: 9;

  a {
    text-align: center;
    font-size: 1.2rem;
  }
`;
