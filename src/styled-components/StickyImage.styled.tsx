import styled from "styled-components";

export const FixedImageCenter = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centra vertical y horizontalmente */
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const FixedImageLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  pointer-events: none;
`;

export const FixedImageRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  pointer-events: none;
`;

export const Image = styled.img`
  width: 100%;
  filter: blur(2px);
  mask: linear-gradient(to bottom, transparent 0%, transparent 30%, black 100%);
  -webkit-mask: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 30%,
    black 100%
  );
`;

export const ImageCard = styled.img`
  width: 100%;
  filter: blur(2px);
  mask: linear-gradient(to bottom, transparent 3%, transparent 70%, black 100%);
  -webkit-mask: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 20%,
    black 75%
  );
`;
export const ImageSad = styled.img`
  width: 100%;
  filter: blur(2px);
`;
export const BackgroundImage = styled.img`
  width: 100%;
  opacity: 0.4;
  filter: blur(5px);

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
