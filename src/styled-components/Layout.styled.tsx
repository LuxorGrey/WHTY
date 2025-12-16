import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100vw;
  }
`;

export const MainContent = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
