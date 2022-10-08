import React from "react";
import { useSelector } from "react-redux";
import { ReactComponent as Ellipse } from "../../assets/svg/Ellipse 6.svg";
import { ReactComponent as Flag } from "../../assets/svg/flag-filled.svg";
import { ReactComponent as Clock } from "../../assets/svg/clock.svg";
import { ReactComponent as Check } from "../../assets/svg/circle-check-fill.svg";
import { StyledDashboard } from "./Styled.Dashboard";
import { IDashboardProps } from "./types";
import badge1 from "../../assets/images/Badge.png";
import badge2 from "../../assets/images/Badge-2.png";
import badge3 from "../../assets/images/Badge-3.png";
import Button from "../../components/Button";
import imagen1 from "../../assets/images/Rectangle 274.png";
import imagen2 from "../../assets/images/Rectangle-275-2.png";
import imagen3 from "../../assets/images/Rectangle-276.png";
import imagen4 from "../../assets/images/Rectangle-277.png";

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
      <div className="section-main">
        <div className="section-achievements">
          <div className="section-0">
            <p className="subtitle">Achievements</p>
          </div>
          <div className="section-1">
            <div className="wrapper-progress">
              <div className="container">
                <div className="progress-bar">70%</div>
              </div>
            </div>
          </div>
          <div className="section-2">
            <div className="achievements">
              <div>
                <img src={badge1} alt="badge1" />
                <p>Comeback</p>
              </div>
              <div className="achievements-medium">
                <img src={badge2} alt="badge2" />
                <p>Lucky</p>
              </div>
              <div>
                <img src={badge3} alt="badge3" />
                <p>Winner</p>
              </div>
            </div>
          </div>

          <div className="section-3">
            <Button type="button" text="View All" className="text" />
          </div>
        </div>
        <div className="section-category">
          <div className="section-category-0">
            <p className="subtitle">Featured Category</p>
          </div>
          <div className="section-category-1">
            <Button type="button" text="View All" className="text" />
          </div>
          <div className="section-category-2">
            <img src={imagen1} alt="imagen1" />
          </div>
          <div className="section-category-3">
            <img src={imagen2} alt="imagen1" />
          </div>
          <div className="section-category-4">
            <img src={imagen3} alt="imagen1" />
          </div>
          <div className="section-category-5">
            <img src={imagen4} alt="imagen1" />
          </div>
        </div>
      </div>
    </StyledDashboard>
  );
}

export default Dashboard;
