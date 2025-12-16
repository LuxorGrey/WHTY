import styled from "styled-components";

export const VideoWrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9; /* Force 16:9 aspect ratio */
  overflow: hidden; /* Ensure content stays within border radius */
  border-radius: 8px; /* Move border radius to wrapper */

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    /* remove border-radius from iframe as wrapper handles it */
    transition: transform 0.3s ease;
    pointer-events: none; /* Disable interaction with iframe in grid */
  }

  &:hover iframe {
    transform: scale(1.05);
  }
`;

export const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2; /* Sit on top of iframe */
  background: transparent;
`;

export const ModalVideoIframe = styled.iframe`
  width: 75%;
  height: 75%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;
