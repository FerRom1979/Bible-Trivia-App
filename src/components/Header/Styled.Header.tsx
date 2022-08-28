import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fbf9f9;
  backdrop-filter: blur(60px);
  .title {
    font-family: "Poppins";
    font-weight: 800;
    font-size: 30px;
    line-height: 45px;
    color: #696f79;
    margin-left: 59px;
  }
  .btn-start {
    width: 212px;
    height: 64px;
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
    margin-right: 59px;
    h3 {
      margin-left: 15px;
      font-weight: 400;
      font-size: 19px;
      line-height: 28px;
      color: #696f79;
    }
  }
`;

export default StyledHeader;
