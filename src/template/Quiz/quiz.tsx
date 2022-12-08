import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getQuestions } from "../../features/questions/questionsSlices";
import { StyledQuiz } from "./Styled.Quiz";
import logo from "../../assets/images/logo.png";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getAllQuestions = async () => {
    try {
      const response = await (
        await fetch(`${process.env.REACT_APP_API_URL}/questions?page=1&size=10`, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}` || "",
          },
        })
      ).json();

      dispatch(getQuestions(response));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledQuiz>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <h2 className="title">
          This is <br /> Trivia Challenge
        </h2>
      </div>
      <div>
        <p className="description"> You will receive 10 questions can you answer all right?</p>
      </div>
      <div>
        <Button
          type="button"
          text="start"
          className="btn-start"
          onClick={() => navigate("/card-questions")}
        />
      </div>
    </StyledQuiz>
  );
}

export default Quiz;
