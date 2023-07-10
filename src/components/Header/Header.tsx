import React from "react";
import Button from "../Button";
import StyledHeader from "./Styled.Header";
import { ReactComponent as Ellipse } from "../../assets/svg/Ellipse 6.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const { user } = useSelector((state: any) => state.auth);
  function capitalize(word: string) {
    return word[0].toUpperCase() + word.slice(1);
  }
  return (
    <StyledHeader>
      <h2 className="title">QUIZ BIBLE</h2>
      <div className="user-avatar">
        <h3>Hi, {user.name ? capitalize(user.name) : "user"}</h3>
        {user.file ? (
          <img src={`${user.file}`} alt="user avatar" />
        ) : (
          <Ellipse className="avatar" />
        )}
      </div>

      <div>
        <Button
          type="button"
          text="Start Quiz"
          className="btn-start"
          onClick={() => navigate("/config-questions")}
        />
      </div>
    </StyledHeader>
  );
}

export default Header;
