import React, { useState } from "react";
import { StyledTooltip } from "./Styled.Tooltip";
import { ReactComponent as Success } from "../../assets/svg/success.svg";

const Tooltip = () => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  return (
    <StyledTooltip>
      <Success
        className="icon"
        onMouseOver={() => {
          console.log("tooltips...");
          return setShowTooltip(true);
        }}
        onMouseOut={() => {
          console.log("tooltips. blur..");
          return setShowTooltip(false);
        }}
      />
      {showTooltip && <span className="tooltip">Tooltip</span>}
    </StyledTooltip>
  );
};

export default Tooltip;
