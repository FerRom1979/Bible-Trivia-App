import { Formik, Form } from "formik";
import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
//import ReCaptCha from "../../components/Recaptcha/Recaptcha";
import Toast from "../../components/Toast";
import { isEmpty } from "../../utils/isEmpty";
import { initialValuesLogin } from "./initialValues";
import { StyledLoginComponent } from "./styled.Login";
import { ILogin, IMsg } from "./types";
import { validationSchema } from "./validationSchema";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/auth/authSlices";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import LinkComponent from "../../components/LinkComponent";
import DividingComponent from "../../components/DividingCompopnent";
import { ReactComponent as Facebook } from "../../assets/svg/facebook-1.svg";
import { ReactComponent as Google } from "../../assets/svg/google.svg";

const Login = ({ setShowLogin }: ILogin) => {
  const captcha = useRef<ReCAPTCHA>(null);
  const navigate = useNavigate();

  const [msg, setMsg] = useState<IMsg | null>({
    title: "",
    message: "",
    severity: undefined,
  });

  const dispatch = useDispatch();

  const onSubmit = async (values: any, { resetForm }: any) => {
    const { email, password } = await values;
    const user = {
      email,
      password,
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(user),
      });
      const res = await response.json();
      dispatch(loginUser(res));

      setMsg({
        title: res.status,
        severity: "error",
        message: res.error || (res.errors && "Email or password incorrect"),
      });
      localStorage.setItem("token", res.token.token);

      /* const token = await captcha.current?.executeAsync();

      if (token) {
        localStorage.setItem("token", token);
      } */

      resetForm();
      navigate("/");
    } catch (error) {
      if (error)
        setMsg({ title: "Error", severity: "error", message: "Email or password incorrect" });
      resetForm();
    }
  };

  useEffect(() => {
    if (msg) setTimeout(() => setMsg(null), 4000);
  }, [msg]);

  return (
    <Formik
      initialValues={initialValuesLogin}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        // console.log("Formik props", formik);
        return (
          <StyledLoginComponent>
            {msg?.message && (
              <Toast
                message={msg?.message}
                title={msg.title}
                severity={msg.severity}
                setMsg={setMsg}
              />
            )}
            <Form>
              <h2>
                Login <br /> Welcome back!
              </h2>
              <Input
                type="email"
                flexDirection="column"
                label="E-mail"
                name="email"
                className="login"
                placeholder="email"
                isError={!!formik.errors.email}
              />
              <Input
                type="password"
                flexDirection="column"
                label="Password"
                name="password"
                placeholder="password"
                className="login"
                isError={!!formik.errors.password}
              />

              <LinkComponent
                routed="####"
                text="Forgot Password?"
                color="#2F89FC"
                className="link"
              />
              <Button
                text="Sign In"
                type="submit"
                className="button-login"
                disabled={
                  !formik.isValid || formik.isSubmitting || isEmpty(formik.values) || !captcha
                }
              />
              <Button
                text="Don’t have an account? Signup"
                type="button"
                className="text"
                onClick={() => setShowLogin(true)}
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
            <div className="reCaptcha">
              <ReCAPTCHA
                sitekey={"6LeopA8iAAAAAATtXk7RZTI7SE4jOSfleAIBRbFV"}
                size={"invisible"}
                ref={captcha}
              />
            </div>
          </StyledLoginComponent>
        );
      }}
    </Formik>
  );
};

export default Login;
