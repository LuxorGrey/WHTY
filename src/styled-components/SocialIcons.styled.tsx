import styled from "styled-components";

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.text};

`;

export default StyledSocialIcons;
