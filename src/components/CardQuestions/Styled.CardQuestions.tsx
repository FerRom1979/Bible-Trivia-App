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
    flex-direction: row;
    justify-content: space-around;
    align-items: baseline;
    color: #ffffff;
    font-size: 24px;
    margin: 100px 80px;
    .category {
      font-size: 36px;
      line-height: 43px;
      text-transform: capitalize;
    }
  }
  .time {
    display: flex;
  }
  .count-down {
    margin-left: 10px;
  }
  .questions {
    width: 767px;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    color: #38e9bb;
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
  }
  .btn-error {
    background: red;
  }
  .btn-success {
    background: green;
  }
`;
