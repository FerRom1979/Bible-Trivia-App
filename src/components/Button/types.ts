export interface IButtonProps {
  text?: string;
  className?: string;
  type: "submit" | "reset" | "button";
  onClick?: () => void;
}
