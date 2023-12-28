import styled from "styled-components";
import { StyledCardQuestionsProps } from "./types";

export const StyledCardQuestions = styled.div<StyledCardQuestionsProps>`
  background: linear-gradient(180deg, #32167c 0%, #1f1147 54.69%);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 24px;
    margin: 40px 0px;
    .category {
      font-size: 36px;
      line-height: 43px;
      text-transform: capitalize;
      margin-top: 30px;
    }
    .wrapper-card {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-evenly;
    }
  }
  .time {
    display: flex;
  }
  .count-down {
    margin-left: 10px;
  }
  .questions {
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    color: #38e9bb;
    margin-bottom: 40px;
  }

  .answers {
    width: 50%;
  }
  .buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .btn-question {
    min-width: 100%;
    margin: 10px 0px;
    background: #6949fd;
    border-radius: 5px;
    font-size: 32px;
    line-height: 39px;
    text-align: center;
    color: #ffffff;
    border: none;
    margin-bottom: 20px;
    height: 60px;
  }
  .btn-error {
    background: red;
  }
  .btn-success {
    background: green;
  }
  .btn-next {
    background: #38e9bb;
    color: #4d4949;
    font-weight: 700;
  }
`;
