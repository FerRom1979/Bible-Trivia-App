import styled from "styled-components";

export const StyledTooltip = styled.div`
  position: relative;
  .icon :hover .tooltip {
    display: block;
  }
  .tooltip {
    position: absolute;
    background-color: #000;
    color: #fff;
    padding: 10px 5px;
    bottom: 7px;
  }
  svg {
    width: 24px;
    height: 24px;
  }
`;
