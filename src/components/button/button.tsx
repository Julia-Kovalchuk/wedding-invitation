import React, { ReactNode } from "react";

import { StyledButton } from "./styles";

interface IProps {
  children: ReactNode;
  onClick?: (e: any) => void;
  disabled: boolean;
  styleType: "outline" | "default";
}

export const Button = ({ children, onClick, disabled, styleType }: IProps) => (
  <StyledButton disabled={disabled} onClick={onClick} styleType={styleType}>
    {children}
  </StyledButton>
);
