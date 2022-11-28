import React from "react";
import { Link } from "react-router-dom";
import { StyledLinkComponent } from "./Styled.LinkComponent";
import { ILinkProps } from "./types";

function LinkComponent({
  routed,
  children = null,
  text = "",
  color = "#fff",
  className = "",
}: ILinkProps) {
  return (
    <StyledLinkComponent color={color}>
      <Link to={routed} className={className}>
        {text} {children}
      </Link>
    </StyledLinkComponent>
  );
}

export default LinkComponent;
