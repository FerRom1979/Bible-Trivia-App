import { ReactElement } from "react";

export interface IButtonProps {
  text?: string;
  className?: string;
  type: "submit" | "reset" | "button";
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactElement | null;
  bg?: string | null;
}
export interface IStyledButtonProps {
  bg?: string | null;
}
