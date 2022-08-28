import React from "react";
import Button from "../Button";
import StyledHeader from "./Styled.Header";
import { ReactComponent as Ellipse } from "../../assets/svg/Ellipse 6.svg";
import { useSelector } from "react-redux";

function Header() {
  const { user } = useSelector((state: any) => state.auth);
  console.log(user);

  return (
    <StyledHeader>
      <h2 className="title">QUIZ BIBLE</h2>
      <div>
        <Button type="button" text="Start Quiz" className="btn-start" />
      </div>
      <div className="user-avatar">
        {user.file ? <img src={`${user.file}`} alt="user avatar" /> : <Ellipse />}
        <h3>{user.name}</h3>
      </div>
    </StyledHeader>
  );
}

export default Header;
