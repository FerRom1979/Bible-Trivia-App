import styled from "styled-components";
import { ILinkStyled } from "./types";

export const StyledLinkComponent = styled.div<ILinkStyled>`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  .link {
    color: ${({ color }) => color};
    text-decoration: none;
  }
`;
