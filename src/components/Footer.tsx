import { AlienStreetLogo } from "../assets/image/logos/AlienStreetLogo";
import { WLogo } from "../assets/image/logos/W_LOGO";
import { WLogo2 } from "../assets/image/logos/W_LOGO2";
import { Container } from "../styled-components/Container.styled";
import { StyledFooter } from "../styled-components/Footer.styled";
import { ContainerWrapCards } from "./../styled-components/Container.styled";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <ContainerWrapCards>
          <WLogo width={125} />
          <WLogo2 width={125} />
          <AlienStreetLogo width={80} />
        </ContainerWrapCards>
        <SocialIcons />
      </Container>
    </StyledFooter>
  );
}
