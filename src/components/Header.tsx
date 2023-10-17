import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaShopify, FaWhatsapp } from "react-icons/fa";
import { WLogo } from "../assets/W_LOGO";
import { WLogo2 } from "../assets/W_LOGO2";
import {
  Container,
  ContainerWrap,
} from "../styled-components/Container.styled";
import { Nav, StyledHeader } from "../styled-components/Header.styled";
import LinkWithIcon from "./LinkWithIcon";
import Switch from "./Switcher/Switch";
interface HeaderProps {
  toggleTheme: () => void;
  theme: string;
}

export default function Header({ toggleTheme, theme }: HeaderProps) {
  const [isHover, setIsHover] = useState(false);
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <div
            style={{ width: "100%", height: "auto" }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {isHover ? <WLogo width={150} /> : <WLogo2 width={150} />}
          </div>

          <Switch toggleTheme={toggleTheme} theme={theme} />

          <ContainerWrap>
            <LinkWithIcon
              to="https://www.tercerejemplo.com"
              icon={<FaLinkedinIn />}
            />
            <LinkWithIcon
              to="https://www.tercerejemplo.com"
              icon={<FaGithub />}
            />
            <LinkWithIcon
              to="https://www.tercerejemplo.com"
              icon={<FaShopify />}
            />
            <LinkWithIcon
              to="https://www.tercerejemplo.com"
              icon={<FaWhatsapp />}
            />
          </ContainerWrap>
        </Nav>
      </Container>
    </StyledHeader>
  );
}
