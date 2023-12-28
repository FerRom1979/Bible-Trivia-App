import styled from "styled-components";
import { colors } from "../../constant/colors";
import breakpoints from "../../constant/breackpoint";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${colors.linearGradientBackground};
  backdrop-filter: blur(60px);
  padding: 20px 10px;
  .wrapper-title {
    display: flex;
  }
  .title {
    font-family: "Poppins";
    font-weight: 800;
    font-size: 30px;
    line-height: 45px;
    color: ${colors.white};
    width: 100%;
  }
  .account-menu {
    background-color: ${colors.black};
    color: ${colors.white};
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    border-radius: 50px;
  }

  .user-avatar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    h3 {
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      color: ${colors.white};
    }
    .avatar {
      width: 50px;
    }
  }
  @media (min-width: ${breakpoints.md}px) {
    .user-avatar {
      max-width: 240px;
    }
  }
`;

export default StyledHeader;
