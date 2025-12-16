import styled from "styled-components";

export const VideoWrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
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
  grid-template-columns: 1fr;
  gap: 20px;
  margin: 20px auto;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const ModalVideoIframe = styled.iframe`
  width: 80%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;
