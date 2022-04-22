import React from "react";
import { IInputProps } from "./types";
import { InputStyled } from "./Styled.Input";
import { ErrorMessage, Field } from "formik";

const InputField = ({
  label = "",
  name = "",
  flexDirection = "row",
  placeholder = "",
  isError = true,
  disabled = false,
  className = "",
  required = false,
  ...rest
}: IInputProps) => {
  const error = ({ children }: any) => <div className="error">{children}</div>;
  return (
    <InputStyled
      flexDirection={flexDirection}
      isError={isError}
      data-testid="input"
      disabled={disabled}
    >
      <label htmlFor={name}>{label}</label>
      <Field
        id={name}
        placeholder={`${placeholder}${required ? "*" : ""}`}
        disabled={disabled}
        className={className}
        name={name}
        {...rest}
      />
      <ErrorMessage name={name} component={error} />
    </InputStyled>
  );
};

export default InputField;
