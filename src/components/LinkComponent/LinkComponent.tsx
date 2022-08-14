import React from "react";
import { Link } from "react-router-dom";
import { StyledLinkComponent } from "./Styled.LinkComponent";
import { ILinkProps } from "./types";

function LinkComponent({ routed, children = null, text = "", color = "#fff" }: ILinkProps) {
  return (
    <StyledLinkComponent color={color}>
      <Link to={routed} className="link">
        {text} {children}
      </Link>
    </StyledLinkComponent>
  );
}

export default LinkComponent;
