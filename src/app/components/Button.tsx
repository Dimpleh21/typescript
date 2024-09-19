// Button.tsx
"use client";
import React from "react";
import styled from "styled-components";
import { colors, spacing, typography, interactions } from "@/app/designtokens";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.variant === "secondary" ? colors.secondary : colors.primary};
  padding: ${(props) => {
    switch (props.size) {
      case "small":
        return spacing.small;
      case "large":
        return spacing.large;
      default:
        return spacing.medium;
    }
  }};
  font-size: ${typography.fontSize.base};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.text};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${interactions.hover.background};
  }

  &:active {
    background-color: ${interactions.active.background};
  }

  &:focus {
    outline: ${interactions.focus.outline};
  }

  &:disabled {
    background-color: ${colors.error};
    cursor: not-allowed;
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  ...props
}) => {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
