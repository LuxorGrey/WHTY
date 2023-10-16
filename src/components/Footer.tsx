import { Container } from "../styled-components/Container.styled";
import { StyledFooter } from "../styled-components/Footer.styled";
import { Logo } from "../styled-components/Header.styled";
import { ContainerWrapCards } from "./../styled-components/Container.styled";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <ContainerWrapCards>
          <Logo src="src\assets\W_LOGO2.svg" alt="" />
          <Logo src="src\assets\W_LOGO.svg" alt="" />
          <Logo src="src\assets\STREETALIENS.png" alt="" />
        </ContainerWrapCards>
        <SocialIcons />
      </Container>
    </StyledFooter>
  );
}
