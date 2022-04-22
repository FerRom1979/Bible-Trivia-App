import styled from "styled-components";

export const StyledLoginComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #000;
  height: 100vh;

  && {
    form {
      width: 100%;
    }
    h2 {
      text-align: center;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 44px;
      line-height: 53px;
      color: #fff;
    }
  }
`;
