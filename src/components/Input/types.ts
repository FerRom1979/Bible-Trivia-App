import React from "react";

export interface IInputProps {
  label?: string;
  name?: string;
  type?: string;
  flexDirection?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => typeof event;
  isError?: boolean;
  disabled?: boolean;
  className?: string;
}

export type InputStyledProps = {
  flexDirection?: string;
  isError?: boolean;
};
