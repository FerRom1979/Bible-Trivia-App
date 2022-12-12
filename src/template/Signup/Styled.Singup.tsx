import styled from "styled-components";
import breakpoints from "../../constant/breackpoint";

export const StyledRegister = styled.div`
  display: flex;
  justify-content: center;
  width: 370px;
  background: #ffffff;
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
      color: #000;
    }
    .icon-facebook {
      position: relative;
      right: 100px;
    }
    .btn-google {
      border: 1px solid rgba(0, 0, 0, 0.4);
      margin: 20px 0;
      color: rgba(0, 0, 0, 0.6);
      svg {
        right: 107px;
      }
    }
    @media (min-width: ${breakpoints.md}px) {
      width: 400px;
    }
  }
`;
