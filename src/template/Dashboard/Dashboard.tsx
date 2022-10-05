import React from "react";
import { useSelector } from "react-redux";
import { ReactComponent as Ellipse } from "../../assets/svg/Ellipse 6.svg";
import { ReactComponent as Flag } from "../../assets/svg/flag-filled.svg";
import { ReactComponent as Clock } from "../../assets/svg/clock.svg";
import { ReactComponent as Check } from "../../assets/svg/circle-check-fill.svg";
import { StyledDashboard } from "./Styled.Dashboard";
import { IDashboardProps } from "./types";

function Dashboard({ progressBar = 40 }: IDashboardProps) {
  const { user } = useSelector((state: any) => state.auth);
  return (
    <StyledDashboard progressBar={progressBar}>
      <div className="wrapper-user">
        <div className="avatar">
          {user.file ? <img src={`${user.file}`} alt="user avatar" /> : <Ellipse />}
        </div>
        <div className="info-user">
          <h2 className="user-name">
            {user.name} {user.lastName}
          </h2>
          <div className="container">
            <div className="progress-bar">70%</div>
          </div>
          <div className="ranking-data">
            <div className="Wrapper-icons">
              <div className="icon">
                <Flag />
              </div>
              <div>
                <p className="data-number">27</p>
                <p className="data-SubTitle">Quiz Passed</p>
              </div>
            </div>
            <div className="Wrapper-icons">
              <div className="icon">
                <Clock />
              </div>
              <div>
                <p className="data-number">27min</p>
                <p className="data-SubTitle">Fastest Time</p>
              </div>
            </div>
            <div className="Wrapper-icons">
              <div className="icon">
                <Check />
              </div>
              <div>
                <p className="data-number">200</p>
                <p className="data-SubTitle">Correct Answers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="achievements">
          <p>Achievements</p>
          <div className="wrapper-progress">
            <div className="container">
              <div className="progress-bar">70%</div>
            </div>
          </div>
        </div>
        <div>
          <p>Featured Category</p>
        </div>
      </div>
    </StyledDashboard>
  );
}

export default Dashboard;
