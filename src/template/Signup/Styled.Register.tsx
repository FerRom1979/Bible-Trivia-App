import styled from "styled-components";
import breakpoints from "../../constant/breackpoint";

export const StyledRegister = styled.div`
  display: flex;
  justify-content: center;
  width: 370px;

  background-color: #000;
  border-radius: 10px;

  && {
    form {
      width: 90%;
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
      width: 400px;
      form {
        width: 80%;
      }
    }
  }
`;
