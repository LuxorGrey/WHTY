import { useState } from "react";
import { FaShopify } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { WLogo } from "../assets/image/logos/W_LOGO";
import { WLogo2 } from "../assets/image/logos/W_LOGO2";
import { useCart } from "../hooks/useCart";
import { CartIconNumber } from "../styled-components/Cart.styled";
import {
  Container,
  ContainerWrap,
} from "../styled-components/Container.styled";
import { Nav, StyledHeader } from "../styled-components/Header.styled";
import {
  NavLinkLocal,
  NavList,
  SeparatorVertical,
} from "../styled-components/Nav.styled";
import Cart from "./Cart";
import LinkWithIcon from "./LinkWithIcon";
import Switch from "./Switcher/Switch";
interface HeaderProps {
  toggleTheme: () => void;
  isDark: boolean;
}

export default function Header({ toggleTheme, isDark }: HeaderProps) {
  const [isHover, setIsHover] = useState(false);
  const { cart } = useCart();
  const navigate = useNavigate();

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

          <div style={{ width: "100%", height: "auto" }}>
            <NavList>
              <NavLinkLocal onClick={() => navigate("/")}>HOME</NavLinkLocal>
              <SeparatorVertical />
              <NavLinkLocal onClick={() => navigate("/gallery")}>
                GALLERY
              </NavLinkLocal>
              <SeparatorVertical />
              <NavLinkLocal onClick={() => navigate("/products")}>
                PRODUCTS
              </NavLinkLocal>
              <SeparatorVertical />
              <NavLinkLocal onClick={() => navigate("/bio")}>BIO</NavLinkLocal>
            </NavList>
          </div>

          <Switch toggleTheme={toggleTheme} isDark={isDark} />
          <ContainerWrap>
            <LinkWithIcon
              to="https://www.whaitystudios.com/"
              icon={<FaShopify />}
            />
            <Cart /> <CartIconNumber>({cart.length})</CartIconNumber>
          </ContainerWrap>
        </Nav>
      </Container>
    </StyledHeader>
  );
}
