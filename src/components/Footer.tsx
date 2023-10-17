import { AlienStreetLogo } from "../assets/AlienStreetLogo";
import { WLogo } from "../assets/W_LOGO";
import { WLogo2 } from "../assets/W_LOGO2";
import { Container } from "../styled-components/Container.styled";
import { StyledFooter } from "../styled-components/Footer.styled";
import { ContainerWrapCards } from "./../styled-components/Container.styled";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <ContainerWrapCards>
          <WLogo />
          <WLogo2 />
          <AlienStreetLogo />
        </ContainerWrapCards>
        <SocialIcons />
      </Container>
    </StyledFooter>
  );
}
