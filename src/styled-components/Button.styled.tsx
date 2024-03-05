import { ReactNode } from "react";
import styled from "styled-components";
import { pulsateFwd } from "./animations/animations";

interface ButtonProps {
  bg?: string;
  borderColor?: string;
  color?: string;
  onClick?: () => void;
  children?: ReactNode;
  animated?: boolean;
}

export const Button: React.FC<ButtonProps> = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  margin-bottom: 20px;
  background-color: ${({ bg, theme }) => bg || theme.colors.body};
  color: ${({ color, theme }) => color || theme.colors.text};
  border: solid ${(props) => props?.borderColor} 3px;
  animation: ${({ animated }) => animated && pulsateFwd} 2s ease-in-out infinite
    both;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
export default Button;
