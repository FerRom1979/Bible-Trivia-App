import styled from "styled-components";
import { InputStyledProps } from "./types";

export const InputStyled = styled.div<InputStyledProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || ""};
  width: 100%;

  && {
    input {
      width: 100%;
      height: 48px;
      padding: 10px;
      margin-bottom: 20px;
      border-radius: 10px;
      border: thin solid ${({ isError }) => (isError ? "red" : "#c4c4c4")};
      font-size: ${({ isError }) => (isError ? "48px" : "16px")};
    }
    .login {
      border: 1px solid ${({ isError }) => (isError ? "red" : "rgba(0, 0, 0, 0.4)")};
      background-color: #fff;
      color: #000;
      outline: rgba(0, 0, 0, 0.4);
      border-radius: 10px;
      font-size: 12px;
      padding: 10px 20px;
      font-weight: 400;
    }
    label {
      margin: 0 0 5px 10px;
      opacity: ${({ disabled }) => (disabled ? "0.5" : "")};
      color: #000;
    }
    .error {
      color: red;
      margin-bottom: 10px;
      text-align: center;
    }
    .wrapper-password {
      position: relative;
    }
    .icon-password {
      position: absolute;
      bottom: 33px;
      left: 85%;
      fill: rgba(0, 0, 0, 0.4);
    }
  }
`;
