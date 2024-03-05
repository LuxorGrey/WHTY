import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import { StyledSocialIcons } from "../styled-components/SocialIcons.styled";
import LinkWithIcon from "./LinkWithIcon";

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <LinkWithIcon
        to="https://www.tiktok.com/@whaitystudios"
        icon={<FaTiktok />}
      />
      <LinkWithIcon
        to="https://www.youtube.com/@whaitystudios"
        icon={<FaYoutube />}
      />
      <LinkWithIcon
        to="https://www.instagram.com/whaitystudios/"
        icon={<FaInstagram />}
      />
    </StyledSocialIcons>
  );
}
