import { useState } from "react";
import { FaShopify, FaWhatsapp } from "react-icons/fa";
import { WLogo } from "../assets/image/logos/W_LOGO";
import { WLogo2 } from "../assets/image/logos/W_LOGO2";
import {
  Container,
  ContainerWrap,
} from "../styled-components/Container.styled";
import { Nav, StyledHeader } from "../styled-components/Header.styled";
import {
  NavLink,
  NavLinkLocal,
  NavList,
  SeparatorVertical,
} from "../styled-components/Nav.styled";
import Cart from "./Cart";
import LinkWithIcon from "./LinkWithIcon";
import Switch from "./Switcher/Switch";
import { useCart } from "../hooks/useCart";
import { CartIconNumber } from "../styled-components/Cart.styled";
import { useNavigate } from "react-router-dom";
interface HeaderProps {
  toggleTheme: () => void;
  theme: string;
}

export default function Header({ toggleTheme, theme }: HeaderProps) {
  const [isHover, setIsHover] = useState(false);
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <Container>
        <Nav>
          <div
            style={{ width: "90%", height: "auto" }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {isHover ? <WLogo width={150} /> : <WLogo2 width={150} />}
          </div>

          <div style={{ width: "100%", height: "auto" }}>
            <NavList>
              <NavLinkLocal onClick={() => navigate("/")}>HOME</NavLinkLocal>
              <SeparatorVertical />
              <NavLinkLocal onClick={() => navigate("/products")}>
                PRODUCTS
              </NavLinkLocal>
              <SeparatorVertical />
              <NavLinkLocal onClick={() => navigate("/bio")}>BIO</NavLinkLocal>
              <SeparatorVertical />
              <NavLink href="https://www.whaitystudios.com/">SHOP</NavLink>
            </NavList>
          </div>

          <Switch toggleTheme={toggleTheme} theme={theme} />
          <ContainerWrap>
            <LinkWithIcon
              to="https://www.whaitystudios.com/"
              icon={<FaShopify />}
            />
            <LinkWithIcon
              to="https://www.tercerejemplo.com"
              icon={<FaWhatsapp />}
            />
            <Cart /> <CartIconNumber>({cart.length})</CartIconNumber>
          </ContainerWrap>
        </Nav>
      </Container>
    </StyledHeader>
  );
}
