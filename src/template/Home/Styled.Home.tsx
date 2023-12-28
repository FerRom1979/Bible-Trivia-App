import styled from "styled-components";
import { colors } from "../../constant/colors";
import breakpoints from "../../constant/breackpoint";

const StyledHome = styled.div`
  background: ${colors.linearGradientBackground};
  flex: 1;
  padding-top: 80px;
  .main-home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
      font-size: 34px;
      text-align: center;
      margin-bottom: 40px;
      color: ${colors.white};
    }
  }
  .wrapper-img-bible {
    width: 95%;
    height: 100%;
    border-radius: 10px;
    margin: 0px 0px 40px 0;
    max-width: 800px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 20px;
      object-fit: cover;
    }
  }

  .navbar {
    margin: auto;
  }
  .btn-start {
    width: 212px;
    height: 44px;
    background: ${colors.primaryButton};
    border: none;
    border-radius: 30px;
    font-family: "Poppins";
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: ${colors.white};
  }
  @media (min-width: ${breakpoints.md}px) {
    .wrapper-img-bible {
      height: 500px;
    }
  }
`;

export default StyledHome;
