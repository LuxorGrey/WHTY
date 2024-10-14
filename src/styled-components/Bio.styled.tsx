import styled from "styled-components";

export const Section = styled.section`
  margin-bottom: 115px;
  overflow: hidden;

  @media (min-width: 768px) {
    margin-bottom: 96px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 150px;
  }
`;

export const Container = styled.div`
  place-content: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 32px;
  padding-bottom: 51px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 69px;
    padding-top: 50px;
    padding-bottom: 47px;
  }

  @media (min-width: 1440px) {
    gap: 125px;
    max-width: 100%;
  }
`;

export const ImageContainer = styled.img`
  margin-bottom: 32px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
    max-width: none;
    width: 40.843%;
  }

  @media (min-width: 1440px) {
    width: 48.6486%;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex: 1;
    gap: 20px;
    max-width: 31.5315%;
  }
`;
export const ParagraphBio = styled.p`
  mix-blend-mode: normal;
  opacity: 0.8;
  text-align: left;
  margin-bottom: 3em;
`;
