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
      font-size: ${({ isError }) => (isError ? "48px" : "16px")};
    }
    .login {
      border: 2px solid ${({ isError }) => (isError ? "red" : "#6066ff")};
      background-color: #fff;
      color: #000;
      outline: #6066ff;
      border-radius: 20px;
      font-size: 16px;
      padding: 10px 20px;
    }
    label {
      margin: 0 0 10px 10px;
      opacity: ${({ disabled }) => (disabled ? "0.5" : "")};
      color: #fff;
    }
    .error {
      color: red;
      margin-bottom: 10px;
      text-align: center;
    }
  }
`;
