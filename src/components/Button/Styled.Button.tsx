import styled from "styled-components";
import { IStyledButtonProps } from "./types";

export const ButtonStyled = styled.div<IStyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  && {
    .button-login {
      width: 100%;
      height: 48px;
      background: ${({ bg }) => bg || "#0e64d2"};
      box-sizing: border-box;
      border-radius: 5px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 18px;
      color: #ffffff;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .text {
      background: transparent;
      color: #000;
      border: none;
      margin: 20px 0;
      font-size: 16px;
    }
    button {
      cursor: pointer;
    }
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;
