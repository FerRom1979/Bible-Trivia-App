import React from "react";
import { StyledToast } from "./Style.Toast";
import { IToast } from "./types";

function Toast({ message = "Toast" }: IToast) {
  return (
    <StyledToast>
      <span>{message as string}</span>
    </StyledToast>
  );
}

export default Toast;
