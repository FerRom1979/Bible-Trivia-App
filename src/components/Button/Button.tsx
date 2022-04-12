import React from "react";
import { ButtonStyled } from "./Styled.Button";
import { IButtonProps } from "./types";

const Button = ({ text = "", className = "" }: IButtonProps) => {
  return (
    <ButtonStyled data-testid="button" className={className}>
      <button className={className}>{text}</button>
    </ButtonStyled>
  );
};

export default Button;
