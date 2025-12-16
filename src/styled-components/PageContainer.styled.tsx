import styled from "styled-components";

export const PageContainer = styled.section`
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  position: relative;
  overflow: hidden;
  margin-bottom: 115px;

  @media (min-width: 768px) {
    margin-bottom: 96px;
    padding: 0 40px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 150px;
    padding: 0 60px;
  }
`;
