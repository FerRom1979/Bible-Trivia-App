import React from "react";

export interface IInputProps {
  label?: string;
  name?: string;
  type?: "text" | "email" | "password" | "number";
  flexDirection?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => typeof event;
  isError?: boolean;
  disabled?: boolean;
  className?: string;
  required?: boolean;
}

export type InputStyledProps = {
  flexDirection?: string;
  isError?: boolean;
  disabled?: boolean;
};
