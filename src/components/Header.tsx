import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importar iconos de menú
import { useNavigate, useLocation } from "react-router-dom";
import { WLogo } from "../assets/image/logos/W_LOGO";
import { WLogo2 } from "../assets/image/logos/W_LOGO2";
import { useTheme } from "../context/themeContext";
import {
  ContainerHeader,
  MobileMenuIcon,
  MobileNavList,
  Nav,
  NavLinkLocal,
  NavList,
  SeparatorVertical,
  StyledHeader,
} from "../styled-components/Nav.styled";
import Switch from "./Switcher/Switch";

export default function Header() {
  const [isHover, setIsHover] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú móvil
  const navigate = useNavigate();
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledHeader>
      <ContainerHeader>
        <Nav>
          <div
            style={{ cursor: "pointer" }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={() => navigate("/")}
          >
            {isHover ? <WLogo width={150} /> : <WLogo2 width={150} />}
          </div>
          {/* Botón de menú hamburguesa para móvil */}
          <MobileMenuIcon onClick={handleMenuToggle}>
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </MobileMenuIcon>
          {/* Menú de navegación para pantallas grandes */}
          <NavList className="desktop-menu">
            <NavLinkLocal
              $active={location.pathname === "/"}
              onClick={() => navigate("/")}
            >
              HOME
            </NavLinkLocal>
            <SeparatorVertical />
            <NavLinkLocal
              $active={location.pathname.startsWith("/gallery")}
              onClick={() => navigate("gallery")}
            >
              GALLERY
            </NavLinkLocal>
            <SeparatorVertical />
            <NavLinkLocal
              $active={location.pathname === "/bio"}
              onClick={() => navigate("bio")}
            >
              BIO
            </NavLinkLocal>
          </NavList>

          <Switch toggleTheme={toggleTheme} isDark={isDark} />
        </Nav>

        {/* Menú desplegable para móvil */}
        {isMenuOpen && (
          <MobileNavList>
            <NavLinkLocal
              onClick={() => {
                navigate("/");
                handleMenuToggle();
              }}
            >
              HOME
            </NavLinkLocal>
            <NavLinkLocal
              onClick={() => {
                navigate("gallery");
                handleMenuToggle();
              }}
            >
              GALLERY
            </NavLinkLocal>
            <NavLinkLocal
              onClick={() => {
                navigate("bio");
                handleMenuToggle();
              }}
            >
              BIO
            </NavLinkLocal>
          </MobileNavList>
        )}
      </ContainerHeader>
    </StyledHeader>
  );
}
