import styled from "styled-components";

export const StyledCardResult = styled.div`
  background: linear-gradient(180deg, #32167c 0%, #1f1147 54.69%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 48px;
    line-height: 58px;
    margin: 74px 46px;
    color: #38e9bb;
  }
  li {
    margin-bottom: 20px;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
    position: relative;
    svg {
      position: absolute;
      bottom: 0.5px;
      margin-left: 10px;
    }
  }
  .score {
    margin: 48px 0;
    font-size: 32px;
    line-height: 39px;
    color: #38e9bb;
  }
  .btn-result {
    width: 247px;
    margin-bottom: 20px;
    background: #6949fd;
    border: none;
    border-radius: 10px;
    font-size: 32px;
    line-height: 39px;
    color: #ffffff;
  }
  .error {
    fill: red;
  }
  span {
    text-align: center;
  }
`;
