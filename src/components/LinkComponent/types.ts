import React from "react";

export interface ILinkProps {
  routed: string;
  children?: React.ReactNode;
  text?: string;
  color?: string;
}

export interface ILinkStyled {
  color?: string;
}
