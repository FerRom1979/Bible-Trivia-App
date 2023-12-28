import React from "react";
import StyledHeader from "./Styled.Header";
// import { ReactComponent as Ellipse } from "../../assets/svg/Ellipse 6.svg";
import { useSelector } from "react-redux";

function Header() {
  const { user } = useSelector((state: any) => state.auth);
  function capitalize(word: string) {
    return word[0].toUpperCase() + word.slice(1);
  }
  const firstLetter = user?.name?.charAt(0)?.toUpperCase() || "";
  return (
    <StyledHeader>
      <h2 className="title">Bible Quiz</h2>
      <div className="user-avatar">
        {user && (
          <>
            <h3>Hola, {user.name ? capitalize(user.name) : "user"}</h3>
            <span className="account-menu">
              {user.file ? (
                <img src={`${user.file}`} alt="user avatar" />
              ) : (
                <div>{firstLetter}</div>
              )}
            </span>
          </>
        )}
      </div>
    </StyledHeader>
  );
}

export default Header;
