import React from "react";
import { ButtonStyled } from "./Styled.Button";
import { IButtonProps } from "./types";

const Button = ({ text }: IButtonProps) => {
  return <ButtonStyled data-testid="button">{text}</ButtonStyled>;
};

export default Button;
