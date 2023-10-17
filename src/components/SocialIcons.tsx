import { FaFacebook, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { StyledSocialIcons } from "../styled-components/SocialIcons.styled";
import LinkWithIcon from "./LinkWithIcon";

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <LinkWithIcon to="https://www.tercerejemplo.com" icon={<FaTiktok />} />
      <LinkWithIcon to="https://www.tercerejemplo.com" icon={<FaYoutube />} />
      <LinkWithIcon to="https://www.tercerejemplo.com" icon={<FaTwitter />} />
      <LinkWithIcon to="https://www.tercerejemplo.com" icon={<FaFacebook />} />
    </StyledSocialIcons>
  );
}
