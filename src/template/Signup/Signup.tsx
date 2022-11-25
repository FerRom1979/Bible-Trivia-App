import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { StyledRegister } from "./Styled.Singup";
import { initialValuesRegister } from "./initialValuesRegister";
import { validationSchema } from "./validationSchema";
import { ISignup, IValues } from "./interfaces";
import { isEmpty } from "../../utils/isEmpty";
import Toast from "../../components/Toast";
import ReCaptCha from "../../components/Recaptcha/Recaptcha";
import DividingComponent from "../../components/DividingCompopnent";
import { ReactComponent as Facebook } from "../../assets/svg/facebook-1.svg";
import { ReactComponent as Google } from "../../assets/svg/google.svg";

const Signup = ({ setShowLogin }: ISignup) => {
  const [msg, setMsg] = useState<string>("");
  const [captcha, setCaptcha] = useState<boolean>(false);

  const onSubmit = async (values: IValues, { resetForm }: any) => {
    const { name, email, password } = values;
    const user = {
      name,
      email,
      password,
    };
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(user),
      });
      if (response.status === 400) {
        return setMsg(response.statusText);
      }
      if (response.status === 500) {
        return setMsg(response.statusText);
      }
      const res = await response.json();

      if (res.status === 200) setShowLogin(false);
      resetForm();
    } catch (error) {
      if (error) setMsg("Email or password incorrect");
    }
  };

  useEffect(() => {
    if (msg) setTimeout(() => setMsg(""), 2000);
  }, [msg]);

  return (
    <Formik
      initialValues={initialValuesRegister}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        //  console.log("Formik props", formik);
        return (
          <StyledRegister>
            {msg && <Toast message={msg} />}
            <Form>
              <h2>Signup</h2>
              <Input
                type="text"
                flexDirection="column"
                label="Name"
                name="name"
                className="login"
                placeholder="Enter Your Username"
                isError={!!formik.errors.name}
              />
              <Input
                type="email"
                flexDirection="column"
                label="E-mail"
                name="email"
                className="login"
                placeholder="Enter Your Email"
                isError={!!formik.errors.email}
              />
              <Input
                type="password"
                flexDirection="column"
                label="Password"
                name="password"
                placeholder="Enter Your Password"
                className="login"
                isError={!!formik.errors.password}
              />
              <Input
                type="password"
                flexDirection="column"
                label="Confirm Password"
                name="confirmPassword"
                placeholder="Confirm Your Password"
                className="login"
                isError={!!formik.errors.confirmPassword}
              />
              {!isEmpty(formik.values) && formik.isValid && (
                <div className="reCaptcha">
                  <ReCaptCha captcha={setCaptcha} />
                </div>
              )}
              <Button
                text="SignUp"
                type="submit"
                className="button-login"
                disabled={
                  !formik.isValid || formik.isSubmitting || isEmpty(formik.values) || !captcha
                }
              />
              <Button
                text="Already have an account? Login"
                type="button"
                className="text"
                onClick={() => setShowLogin(false)}
              />
              <DividingComponent label="Or" />
              <Button text="Login with Facebook" type="submit" className="button-login">
                <Facebook className="icon-facebook" />
              </Button>
              <Button
                text="Login with Google"
                type="submit"
                className="button-login btn-google"
                bg="#fff"
              >
                <Google className="icon-facebook" />
              </Button>
            </Form>
          </StyledRegister>
        );
      }}
    </Formik>
  );
};

export default Signup;
