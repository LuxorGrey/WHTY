import { useState } from "react";
import { FaBars, FaShopify, FaTimes } from "react-icons/fa"; // Importar iconos de menú
import { useNavigate } from "react-router-dom";
import { WLogo } from "../assets/image/logos/W_LOGO";
import { WLogo2 } from "../assets/image/logos/W_LOGO2";
import { useTheme } from "../context/themeContext";
import {
  Container,
  ContainerWrap,
} from "../styled-components/Container.styled";
import {
  MobileMenuIcon,
  MobileNavList,
  Nav,
  NavLinkLocal,
  NavList,
  SeparatorVertical,
  StyledHeader,
} from "../styled-components/Nav.styled";
import LinkWithIcon from "./LinkWithIcon";
import Switch from "./Switcher/Switch";

export default function Header() {
  const [isHover, setIsHover] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú móvil
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledHeader>
      <Container>
        <Nav>
          <div
            style={{ width: "75%", height: "auto" }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {isHover ? <WLogo width={150} /> : <WLogo2 width={150} />}
          </div>

          {/* Botón de menú hamburguesa para móvil */}
          <MobileMenuIcon onClick={handleMenuToggle}>
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </MobileMenuIcon>

          {/* Menú de navegación para pantallas grandes */}
          <div style={{ width: "100%", height: "auto" }}>
            <NavList className="desktop-menu">
              <NavLinkLocal onClick={() => navigate("/")}>HOME</NavLinkLocal>
              <SeparatorVertical />
              <NavLinkLocal onClick={() => navigate("gallery")}>
                GALLERY
              </NavLinkLocal>
              <SeparatorVertical />
              <NavLinkLocal onClick={() => navigate("bio")}>BIO</NavLinkLocal>
            </NavList>
          </div>

          <Switch toggleTheme={toggleTheme} isDark={isDark} />
          <ContainerWrap>
            <LinkWithIcon
              to="https://www.whaitystudios.com/"
              icon={<FaShopify />}
            />
          </ContainerWrap>
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
      </Container>
    </StyledHeader>
  );
}
