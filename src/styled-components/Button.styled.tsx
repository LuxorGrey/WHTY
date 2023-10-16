import { ReactNode } from "react";
import styled from "styled-components";
import { pulsateFwd } from "./animations/animations";

interface ButtonProps {
  bg?: string;
  borderColor?: string;
  color?: string;
  children?: ReactNode;
  isAnimated?: boolean;
}

export const Button: React.FC<ButtonProps> = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  margin-bottom:  20px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
  border: solid ${(props) => props?.borderColor} 3px;
  animation: ${({ isAnimated }) => isAnimated && pulsateFwd} 2s ease-in-out infinite both;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
  
`;
export default Button;
