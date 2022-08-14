import React, { useState } from "react";

import Login from "../Login";
import Signup from "../Signup";
import { StyledRegister } from "./Styled.Register";

function Register() {
  const [showLogin, setShowLogin] = useState<boolean>(false);
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
