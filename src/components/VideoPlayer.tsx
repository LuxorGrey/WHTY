import styled from "styled-components";
import videoBackground from "../assets/image/videoBackground.mp4";
import { pulsateFwd } from "../styled-components/animations/animations";

const VideoPlayer = ({ enter }: { enter: () => void }) => {
  const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 80vh;
    overflow: hidden;
  `;

  const Video = styled.video`
    width: 100%;
    height: auto;
  `;

  const FloatingButton = styled.button`
    position: absolute;
    bottom: 0;
    left: 43%;
    transform: translateX(-50%);
    border: none;
    padding: 10px 20px;
    border-radius: 2em;
    cursor: pointer;
    margin: 40px;
    background-color: ${({ theme }) => theme.colors.body};
    color: ${({ color, theme }) => color || theme.colors.text};
    animation: ${pulsateFwd} 2s ease-in-out infinite both;
    &:hover {
      opacity: 0.9;
      transform: scale(0.98);
    }
  `;

  return (
    <VideoContainer>
      <Video autoPlay src={videoBackground} loop />
      <FloatingButton onClick={enter}>Tu Botón</FloatingButton>
    </VideoContainer>
  );
};

export default VideoPlayer;
