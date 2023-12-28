import React from "react";
import { StyledDividingComponent } from "./Styled.DividingComponent";
import { DividingComponentProps } from "./types";

const DividingComponent = ({ label }: DividingComponentProps) => {
  return (
    <StyledDividingComponent>
      <div className="line" />
      {label && <span>{label}</span>}
      <div className="line" />
    </StyledDividingComponent>
  );
};

export default DividingComponent;
