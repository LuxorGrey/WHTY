import styled from "styled-components";

export const VideoWrapper = styled.div`
  cursor: pointer;
  position: relative;
  iframe {
    border: none;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }

  &:hover iframe {
    transform: scale(1.05);
  }
`;

export const GalleryGridVideo = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
`;

export const ModalVideoIframe = styled.iframe`
  width: 80%;
  height: 80%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;
