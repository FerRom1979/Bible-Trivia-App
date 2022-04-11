import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input";
import { StyledLoginComponent } from "./styled.Login";

const Login = () => {
  return (
    <StyledLoginComponent>
      <form>
        <h2>Login</h2>
        <Input
          type="text"
          flexDirection="column"
          label="UserName"
          name="user-name"
          disabled={true}
        />
        <Input type="password" flexDirection="column" label="Password" name="password" />
        <Button text="Login" />
      </form>
    </StyledLoginComponent>
  );
};

export default Login;
