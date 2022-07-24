import React from "react";
import { ButtonStyled } from "./Styled.Button";
import { IButtonProps } from "./types";

const Button = ({ text = "", className = "", type, onClick, disabled = false }: IButtonProps) => {
  return (
    <ButtonStyled data-testid="button">
      <button className={className} type={type} onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </ButtonStyled>
  );
};

export default Button;
