import React, { useState } from "react";
import { IInputProps } from "./types";
import { InputStyled } from "./Styled.Input";
import { ErrorMessage, Field } from "formik";
import { ReactComponent as Visibility } from "../../assets/svg/eye-off.svg";
import { ReactComponent as VisibilityOf } from "../../assets/svg/eye.svg";

const InputField = ({
  label = "",
  name = "",
  flexDirection = "row",
  placeholder = "",
  isError = true,
  disabled = false,
  className = "",
  required = false,
  type = "text",
  ...rest
}: IInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const Error = ({ children }: any) => <div className="error">{children}</div>;
  return (
    <InputStyled
      flexDirection={flexDirection}
      isError={isError}
      data-testid="input"
      disabled={disabled}
    >
      <label htmlFor={name} className="input-label">
        {label}
      </label>

      <Field
        id={name}
        placeholder={`${placeholder}${required ? "*" : ""}`}
        disabled={disabled}
        className={className}
        name={name}
        type={showPassword ? "text" : type}
        {...rest}
      />
      {type === "password" && (
        <div className="wrapper-password">
          {!showPassword ? (
            <Visibility className="icon-password" onClick={() => setShowPassword(!showPassword)} />
          ) : (
            <VisibilityOf
              className="icon-password"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>
      )}
      <ErrorMessage name={name} component={Error} />
    </InputStyled>
  );
};

export default InputField;
