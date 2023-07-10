import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #fbf9f9;
  backdrop-filter: blur(60px);
  .wrapper-title {
    display: flex;
  }
  .title {
    font-family: "Poppins";
    font-weight: 800;
    font-size: 30px;
    line-height: 45px;
    color: #696f79;
  }
  .btn-start {
    width: 212px;
    height: 44px;
    background: #8692a6;
    border: none;
    border-radius: 30px;
    font-family: "Poppins";
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
  }
  .user-avatar {
    display: flex;
    justify-content: space-around;
    width: 100%;
    h3 {
      margin-left: 15px;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      color: #696f79;
    }
    .avatar {
      width: 50px;
    }
  }
`;

export default StyledHeader;
