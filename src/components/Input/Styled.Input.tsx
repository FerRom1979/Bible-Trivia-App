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
    .login {
      border: 2px solid #6066ff;
      background-color: #000;
      color: #fff;
      outline: #6066ff;
      border-radius: 20px;
      font-size: 24px;
      padding: 10px 20px;
    }
    label {
      margin-bottom: 5px;
    }
  }
`;
