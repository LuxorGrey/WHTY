import { FaGithub, FaLinkedinIn, FaShopify, FaWhatsapp } from "react-icons/fa";
import {
  Container,
  ContainerWrap,
} from "../styled-components/Container.styled";
import { Logo, Nav, StyledHeader } from "../styled-components/Header.styled";
import ParallaxImageWithText from "./LandingImage";
import LinkWithIcon from "./LinkWithIcon";
export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="src\assets\W_LOGO2.svg" alt="Whaity" />

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
        <ParallaxImageWithText />
      </Container>
    </StyledHeader>
  );
}
