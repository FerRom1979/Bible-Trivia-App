import React, { useState } from "react";
import { useAppSelector } from "../../app/hook";
import Button from "../Button";
import Countdown from "../CountDown/CountDown";
import { StyledCardQuestions } from "./Styled.CardQuestions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { counterAnswersCorrect } from "../../features/questions/questionsSlices";
import { useNavigate } from "react-router-dom";

const CardQuestions = () => {
  const navigate = useNavigate();
  const questions = useAppSelector((state) => state.questions.questions);
  const dispatch = useDispatch();
  const [counter, setCounter] = useState<number>(1);
  const [stop, setStop] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<string | undefined>(undefined);

  const getTime = (time: any) => {
    console.log(time);
  };
  useEffect(() => {
    setStop(true);
  }, []);

  const handleAnswer = (answer: string) => {
    if (answer === questions[counter - 1].responseCorrect) {
      dispatch(counterAnswersCorrect(questions[counter - 1]._id));
    }
    setIsCorrect(answer);
    setStop(true);
  };

  return (
    <StyledCardQuestions>
      <div className="header">
        <div className="wrapper-card">
          <div className="counter">
            Questions {counter} of {questions?.length}
          </div>
          <div className="time">
            TIME: <Countdown getTime={getTime} stop={stop} startTime={2} />
          </div>
        </div>
        <div className="category">{questions[counter - 1]?.type || " "} </div>
      </div>
      <div>
        <p className="questions">{questions[counter - 1]?.question}</p>
      </div>
      <div className="answers">
        <div className="buttons">
          <div>
            {questions[counter - 1]?.answers.map((answer: string, index: number) => (
              <Button
                type="button"
                text={answer}
                className={isCorrect === answer ? "btn-question btn-success" : "btn-question"}
                key={index}
                onClick={() => handleAnswer(answer)}
                disabled={isCorrect && isCorrect !== answer ? true : false}
              />
            ))}
            <Button
              type="button"
              text={counter < 10 ? "Next" : "Finish"}
              className="btn-question btn-next"
              onClick={() => {
                setIsCorrect(undefined);
                if (counter === questions?.length) {
                  return navigate("/card-results");
                }
                setCounter((prev) => {
                  return prev + 1;
                });
              }}
            />
          </div>
        </div>
      </div>
    </StyledCardQuestions>
  );
};
export default CardQuestions;
