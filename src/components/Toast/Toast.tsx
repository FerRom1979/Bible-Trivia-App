import React from "react";
import { StyledToast } from "./Style.Toast";
import { IToast } from "./types";
import getIcons from "../../utils/getIcons";

function Toast({ message = "Toast", severity = "error", title = "", setMsg = "" }: IToast) {
  return (
    <StyledToast className={severity}>
      <div className="wrapper-toast">
        {getIcons(severity)}
        <div>
          <p>{title}</p>
          <span>{message as string}</span>
        </div>
        {getIcons("close", setMsg)}
      </div>
    </StyledToast>
  );
}

export default Toast;
//
