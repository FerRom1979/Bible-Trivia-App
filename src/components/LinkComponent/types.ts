import React from "react";

export interface ILinkProps {
  routed: string;
  children?: React.ReactNode;
  text?: string;
  color?: string;
  className?: string;
}

export interface ILinkStyled {
  color?: string;
}
