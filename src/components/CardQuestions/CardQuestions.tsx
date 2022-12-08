import React from "react";
import Button from "../Button";
import { StyledCardQuestions } from "./Styled.CardQuestions";

const CardQuestions = () => {
  return (
    <StyledCardQuestions>
      <div className="header">
        <div className="counter">Questions 1 of 10</div>
        <div className="category">Questions Category</div>
        <div className="time">TIME: 12:32</div>
      </div>
      <div className="questions">
        <p className="questions">
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry`&apos;`s standard dummy text ever since the 1500s
        </p>
      </div>
      <div className="answers">
        <div className="buttons">
          <Button type="button" text="True" className="btn-question" />
          <Button type="button" text="False" className="btn-question" />
        </div>
      </div>
    </StyledCardQuestions>
  );
};
export default CardQuestions;
