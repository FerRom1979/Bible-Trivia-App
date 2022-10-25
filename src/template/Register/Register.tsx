import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../features/auth/authSlices";

import Login from "../Login";
import Signup from "../Signup";
import { StyledRegister } from "./Styled.Register";

function Register() {
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const authT = async () => {
    console.log(token);

    try {
      const response = await fetch(`http://localhost:4000/api/v1/auth/protected`, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}` || "",
        },
      });
      const res = await response.json();

      dispatch(loginUser(res));
      if (res) {
        return navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (token) {
    authT();
  }

  return (
    <StyledRegister>
      <div>
        {!showLogin ? (
          <Login setShowLogin={setShowLogin} />
        ) : (
          <Signup setShowLogin={setShowLogin} />
        )}
      </div>
    </StyledRegister>
  );
}

export default Register;
