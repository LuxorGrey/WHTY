import { keyframes } from "styled-components";

export const trackingInExpand = keyframes`
0% {
  letter-spacing: -0.5em;
  opacity: 0;
}
40% {
  opacity: 0.6;
}
100% {
  opacity: 1;
}
`;

export const focusInExpand = keyframes`
  0% {
    letter-spacing: -0.5em;
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
`;

export const scaleIn = keyframes`
  from {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
  to {
    transform: scale(1.05);
    box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.4);
  }
`;

export const scaleOut = keyframes`
  from {
    transform: scale(1.05);
    box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.4);
  }
  to {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`;
export const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

// Define el keyframe para el efecto del cursor de la máquina de escribir
export const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: inherit; }
`;

export const pulsateFwd = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;
