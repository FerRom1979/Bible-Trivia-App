import React from "react";
import { ButtonStyled } from "./Styled.Button";
import { IButtonProps } from "./types";

const Button = ({
  text = "",
  className = "",
  type,
  onClick,
  disabled = false,
  children = null,
  bg = null,
}: IButtonProps) => {
  return (
    <ButtonStyled data-testid="button" bg={bg}>
      <button className={className} type={type} onClick={onClick} disabled={disabled}>
        {children}
        {text}
      </button>
    </ButtonStyled>
  );
};

export default Button;
