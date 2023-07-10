import React from "react";
import { useAppSelector } from "../../app/hook";
import Button from "../Button";
import { StyledCardResult } from "./Styled.CardResult";
import { ReactComponent as Success } from "../../assets/svg/success.svg";
import { ReactComponent as Error } from "../../assets/svg/close-4.svg";
import { useDispatch } from "react-redux";
import { addDataPlayer } from "../../features/player/playerSlice";

const CardResult = () => {
  const questions = useAppSelector((state) => state.questions.questions);
  const total = useAppSelector((state) => state.questions.total);
  const resultQuestions = {
    totalQuestions: questions.length,
    totalCorrectAnswers: total.length,
    difficulty: "",
    time: "",
  };
  const dispatch = useDispatch();

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
      <div className="score">
        You Scored {total.length}/{questions.length}
      </div>
      <div>
        <Button className="btn-result" type="button" text="Play Again" />
      </div>
      <div>
        <Button
          className="btn-result"
          type="button"
          text="End Game"
          onClick={() => dispatch(addDataPlayer(resultQuestions))}
        />
      </div>
    </StyledCardResult>
  );
};

export default CardResult;
