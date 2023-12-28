import styled from "styled-components";
import breakpoints from "../../constant/breackpoint";

export const StyledLoginComponent = styled.div`
  display: flex;
  justify-content: center;
  width: 370px;
  background-color: #ffffff;
  border-radius: 10px;
  && {
    form {
      width: 100%;
      padding: 20px 40px;
    }
    h2 {
      text-align: start;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      margin: 20px 0;
      color: rgba(0, 0, 0, 0.8);
    }
    .link {
      margin: 0 0 20px 0;
    }
    .icon-facebook {
      position: relative;
      right: 80px;
    }
    .btn-google {
      border: 1px solid rgba(0, 0, 0, 0.4);
      margin: 20px 0;
      color: rgba(0, 0, 0, 0.6);
      svg {
        right: 88px;
      }
    }

    .grecaptcha-badge {
      bottom: 60px !important;
    }

    @media (min-width: ${breakpoints.md}px) {
      width: 400px;
    }
  }
`;
