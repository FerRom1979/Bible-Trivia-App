import styled from "styled-components";

export const StyledCardResult = styled.div`
  background: linear-gradient(180deg, #32167c 0%, #1f1147 54.69%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .title {
    font-size: 48px;
    line-height: 58px;
    margin: 40px 30px;
    color: #38e9bb;
  }
  li {
    margin-bottom: 20px;
    font-size: 28px;
    line-height: 29px;
    color: #ffffff;
    position: relative;
    svg {
      position: absolute;
      bottom: 0.5px;
      margin-left: 10px;
    }
  }
  .wrapper-results {
    padding: 20px;
    margin-left: 20px;
  }
  .score {
    margin: 48px 0;
    font-size: 32px;
    line-height: 39px;
    color: #38e9bb;
  }
  .btn-result {
    width: 247px;
    background: #6949fd;
    border: none;
    border-radius: 10px;
    font-size: 32px;
    line-height: 39px;
    color: #ffffff;
    margin-bottom: 20px;
    height: 60px;
  }
  .error {
    fill: red;
  }
  span {
    text-align: center;
  }
`;
