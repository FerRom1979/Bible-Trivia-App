import React from "react";
import { ButtonStyled } from "./Styled.Button";
import { IButtonProps } from "./types";

const Button = ({ text = "", className = "", type, onClick }: IButtonProps) => {
  return (
    <ButtonStyled data-testid="button">
      <button className={className} type={type} onClick={onClick}>
        {text}
      </button>
    </ButtonStyled>
  );
};

export default Button;
