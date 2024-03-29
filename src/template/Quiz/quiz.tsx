import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getQuestions } from "../../features/questions/questionsSlices";
import { StyledQuiz } from "./Styled.Quiz";
import logo from "../../assets/images/logo.png";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { questions } from "../../api/getQuestions";
import { useAppSelector } from "../../app/hook";

const Quiz = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filtering = useAppSelector((state) => state.questions.configQuestions);
  const filter = JSON.stringify(filtering)
    .replace(/[[\]"]/g, "")
    .replace(",", "&");

  const filteringQuestions = async () => {
    console.log(filter);

    try {
      const response = await questions.FilterQuestions(1, 10, filter);
      dispatch(getQuestions(response));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    filteringQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledQuiz>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <h2 className="title">
          Se trata de un reto sobre <br /> cuánto sabes de la Biblia.
        </h2>
      </div>
      <div>
        <p className="description"> Recibirás 10 preguntas ¿puedes responderlas todas bien?</p>
      </div>
      <div>
        <Button
          type="button"
          text="comenzar"
          className="btn-start"
          onClick={() => navigate("/card-questions")}
        />
      </div>
    </StyledQuiz>
  );
};

export default Quiz;
