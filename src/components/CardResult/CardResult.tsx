import React from "react";
import { useAppSelector } from "../../app/hook";
import Button from "../Button";
import { StyledCardResult } from "./Styled.CardResult";
import { ReactComponent as Success } from "../../assets/svg/success.svg";
import { ReactComponent as Error } from "../../assets/svg/close-4.svg";

const CardResult = () => {
  const questions = useAppSelector((state) => state.questions.questions);
  const total = useAppSelector((state) => state.questions.total);
  console.log(total);

  return (
    <StyledCardResult>
      <div>
        <h2 className="title">Result:</h2>
      </div>
      <div>
        <ol>
          {questions.map((question: any) => (
            <li key={question._id}>
              {question.question}{" "}
              {total.some((val: string) => question._id === val) ? (
                <Success />
              ) : (
                <Error className="error" />
              )}
            </li>
          ))}
        </ol>
      </div>
      <div className="score">You Scored {total.length}/10</div>
      <div>
        <Button className="btn-result" type="button" text="Play Again" />
      </div>
      <div>
        <Button className="btn-result" type="button" text="End Game" />
      </div>
    </StyledCardResult>
  );
};

export default CardResult;
