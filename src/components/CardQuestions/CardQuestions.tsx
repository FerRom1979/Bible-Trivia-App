import React, { useState } from "react";
import { useAppSelector } from "../../app/hook";
import Button from "../Button";
import Countdown from "../CountDown/CountDown";
import { StyledCardQuestions } from "./Styled.CardQuestions";
import { useEffect } from "react";

const CardQuestions = () => {
  const questions = useAppSelector((state) => state.questions.questions);
  const [counter, setCounter] = useState<number>(1);
  const [stop, setStop] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number>(2);

  const answers = [
    questions[counter - 1].responseOne,
    questions[counter - 1].responseTwo,
    questions[counter - 1].responseTree,
    questions[counter - 1].responseCorrect,
  ];

  const getTime = (time: any) => {
    console.log(time);
  };
  useEffect(() => {
    setStartTime(1);
  }, []);

  return (
    <StyledCardQuestions>
      <div className="header">
        <div className="counter">
          Questions {counter} of {questions.length}
        </div>
        <div className="category">{questions[counter - 1].type}</div>
        <div className="time">
          TIME: <Countdown getTime={getTime} stop={stop} startTime={startTime} />
        </div>
      </div>
      <div>
        <p className="questions">{questions[counter - 1].question}</p>
      </div>
      <div className="answers">
        <div className="buttons">
          <div>
            {answers &&
              answers
                .sort(function () {
                  return Math.random() - 0.5;
                })
                .map((answer, index) => (
                  <Button
                    type="button"
                    text={answer}
                    className="btn-question"
                    key={index}
                    onClick={() => setStop(true)}
                  />
                ))}
            <Button
              type="button"
              text={counter < 10 ? "Next" : "Finish"}
              className="btn-question"
              onClick={() =>
                setCounter((prev) => {
                  return prev + 1;
                })
              }
              disabled={counter === questions.length}
            />
          </div>
        </div>
      </div>
    </StyledCardQuestions>
  );
};
export default CardQuestions;
