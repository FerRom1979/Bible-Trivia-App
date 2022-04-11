import styled from "styled-components";
import { InputStyledProps } from "./types";

export const InputStyled = styled.div<InputStyledProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || ""};
  width: 100%;

  && {
    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 20px;
      border-radius: 10px;
      border: thin solid ${({ isError }) => (isError ? "red" : "#c4c4c4")};
      font-size: 16px;
    }
    label {
      margin-bottom: 5px;
    }
  }
`;
