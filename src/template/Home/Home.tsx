import React from "react";
// import Navbar from "../../components/Navbar/Navbar";
// import Dashboard from "../Dashboard";
import StyledHome from "./Styled.Home";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import imgBible from "../../assets/images/bible-2.jpg";

const Home = () => {
  const navigate = useNavigate();
  return (
    <StyledHome>
      <div className="main-home ">
        <h1 className="title">¿Cuántos conoce de la Biblia?</h1>

        <div className="wrapper-img-bible">
          <img src={`${imgBible}`} alt="bible" />
        </div>
        <Button
          type="button"
          text="Empezar"
          className="btn-start"
          onClick={() => navigate("/config-questions")}
        />
      </div>

      {/* <div className="main-home">
        <div className="navbar">
          <Navbar />
        </div>
        <div>
          <Dashboard />
        </div>
      </div> */}
    </StyledHome>
  );
};

export default Home;
