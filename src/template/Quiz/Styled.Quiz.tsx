import styled from "styled-components";

export const StyledQuiz = styled.div`
  background: linear-gradient(180deg, #32167c 0%, #1f1147 54.69%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  .title {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    color: #38e9bb;
    margin-bottom: 20px;
  }
  .description {
    width: 547px;
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 20px;
  }
  .btn-start {
    width: 210px;
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    background: #6949fd;
    border-radius: 10px;
    border: none;
    text-align: center;

    color: #ffffff;
  }
`;
