import styled from "styled-components";
import breakpoints from "../../constant/breackpoint";

export const StyledRegister = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #000;
  min-height: 100vh;

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
    @media (min-width: ${breakpoints.md}px) {
      form {
        width: 80%;
      }
    }
  }
`;
