import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../api/auth";
import { loginUser } from "../../features/auth/authSlices";
import { getItem } from "../../utils/localStorage";

import Login from "../Login";
import Signup from "../Signup";
import { StyledRegister } from "./Styled.Register";

function Register() {
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = getItem("token");
  const authT = async () => {
    try {
      const response = await auth.UserProtected("auth/protected");

      dispatch(loginUser(response));
      if (response) {
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
