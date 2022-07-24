import styled from "styled-components";

export const ButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  && {
    .button-login {
      width: 176px;
      height: 42px;
      background: #8b54ff;
      border: 2px solid #9ca6ff;
      box-sizing: border-box;
      border-radius: 20px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 18px;
      margin-top: 43px;
      color: #ffffff;
    }
    .text {
      background-color: transparent;
      color: #ffffff;
      border: none;
      margin: 20px 0;
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
