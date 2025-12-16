import styled from "styled-components";

export const ContainerBio = styled.div`
  margin: 2rem;
  padding: 2rem;
  align-items: center;
  place-content: center;
  display: flex;
  flex-direction: column;
  gap: 5%;
  background-color: ${({ theme }) => theme.colors.header};
  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) {
    max-width: 100%;
  }
`;

export const ImageContainer = styled.img`
  width: auto;
  height: 100%;
  border-radius: 5%;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex: 1;
    gap: 20px;
    max-width: 31.5315%;
  }
`;
export const ParagraphBio = styled.p`
  mix-blend-mode: normal;
  text-align: center;
  margin-bottom: 1em;
`;
