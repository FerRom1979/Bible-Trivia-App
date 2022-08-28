import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Dashboard from "../Dashboard";
import StyledHome from "./Styled.Home";

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <div className="main-home">
        <div className="navbar">
          <Navbar />
        </div>
        <div>
          <Dashboard />
        </div>
      </div>
    </StyledHome>
  );
};

export default Home;
