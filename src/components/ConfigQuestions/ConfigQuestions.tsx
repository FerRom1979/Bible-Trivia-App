import React, { useState } from "react";
import { category, difficulty } from "../../constant/configQuestionsValues";
import Button from "../Button";
import { StyledConfigQuestions } from "./Styled.ConfigQuestions";
import { useDispatch } from "react-redux";
import { addConfigQuestions } from "../../features/questions/questionsSlices";
import { useNavigate } from "react-router-dom";
export interface IStepProps {
  cardTitle: string;
  description: string;
  id: number;
  title: string;
  value: string;
}
const items = ["difficulty", "type"];

const ConfigQuestions = () => {
  const [counterSteps, setCounterSteps] = useState<number>(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const STEPS = {
    difficulty: difficulty,
    type: category,
  };

  const handleConfigQuestions = (value: string) => {
    console.log(`${[items[counterSteps]]}: ${value} `);

    if (counterSteps + 1 === items.length) {
      dispatch(addConfigQuestions(`${[items[counterSteps]]}=${value} `));
      navigate("/quiz");
    } else {
      dispatch(addConfigQuestions(`${[items[counterSteps]]}=${value} `));
      setCounterSteps((prev) => {
        return prev + 1;
      });
    }
  };

  return (
    <StyledConfigQuestions>
      <div className="title">{items[counterSteps]}</div>
      <div className="wrapper-cards">
        {STEPS ? (
          (STEPS[items[counterSteps] as keyof {}] as []).map((item: IStepProps) => (
            <div key={item.id}>
              <div className="card-content">
                <div className="description card-title">{item.cardTitle}</div>
                <div className="description">{item.description}</div>
                <div>
                  <Button
                    type="button"
                    text="Selected"
                    className="btn"
                    onClick={() => handleConfigQuestions(item.value)}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>not data</div>
        )}
      </div>
    </StyledConfigQuestions>
  );
};

export default ConfigQuestions;
