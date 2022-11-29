import React from "react";
import { ReactComponent as ErrorIcon } from "../assets/svg/errorIcon.svg";
import { ReactComponent as Close } from "../assets/svg/closeIcon.svg";
import { ReactComponent as Warning } from "../assets/svg/warning.svg";
import { ReactComponent as Success } from "../assets/svg/success.svg";

const getIcons = (typeIcon: string, setMsg: any = undefined) => {
  switch (typeIcon) {
    case "error":
      return <ErrorIcon />;
    case "close":
      return <Close onClick={() => setMsg(null)} className="close" />;
    case "warning":
      return <Warning />;
    case "success":
      return <Success />;
    default:
      return null;
  }
};
export default getIcons;
