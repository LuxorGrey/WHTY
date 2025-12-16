import styled from "styled-components";
import { focusInExpand, pulsateFwd } from "./animations/animations";

export const TextPreLoader = styled.span`
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text};
  animation: ${focusInExpand} 2.25s ease forwards;
  transition: transform 0.3s, filter 0.3s;
  pointer-events: auto;
  font-weight: 900;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const PreLoaderContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.footer};
  color: ${({ theme }) => theme.colors.text};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  overflow: hidden !important;
`;

export const ImagePreLoader = styled.img`
  width: 45%;
  filter: blur(2px);
  mask: linear-gradient(to bottom, transparent 0%, transparent 30%, black 100%);
  -webkit-mask: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 30%,
    black 100%
  );
  animation: ${pulsateFwd} 5s ease-in-out infinite both;
`;

export const PreLoaderContainerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PreLoaderContainerLogo = styled.div`
  animation: ${focusInExpand} 1s ease forwards;
  padding-top: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
