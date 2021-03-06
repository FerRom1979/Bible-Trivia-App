import React from "react";
import { IInputProps } from "./types";
import { InputStyled } from "./Styled.Input";

const InputField = ({
  label = "",
  name = "",
  flexDirection = "",
  placeholder = "",
  isError = false,
  disabled = false,
  ...rest
}: IInputProps) => {
  return (
    <InputStyled flexDirection={flexDirection} isError={isError} data-testid="input">
      <label htmlFor={name}>{label}</label>
      <input id={name} placeholder={placeholder} {...rest} disabled={disabled} />
    </InputStyled>
  );
};

export default InputField;
