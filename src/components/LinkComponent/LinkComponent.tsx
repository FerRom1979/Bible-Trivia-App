import React from "react";
import { Link } from "react-router-dom";
import { StyledLinkComponent } from "./Styled.LinkComponent";

interface ILinkProps {
  routed: string;
  children?: React.ReactNode;
  text?: string;
}

function LinkComponent({ routed, children = null, text = "" }: ILinkProps) {
  return (
    <StyledLinkComponent>
      <Link to={routed} className="link">
        {text} {children}
      </Link>
    </StyledLinkComponent>
  );
}

export default LinkComponent;
