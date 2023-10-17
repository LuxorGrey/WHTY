import React, { ReactNode } from "react";
import StyledLink from "../styled-components/Url.styled";

interface LinkWithIconProps {
  to: string;
  icon?: ReactNode;
  children?: ReactNode;
}

const LinkWithIcon: React.FC<LinkWithIconProps> = ({ to, icon, children }) => (
  <StyledLink href={to}>
    {children && children}
    {icon && icon}
  </StyledLink>
);

export default LinkWithIcon;
