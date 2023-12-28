import { Formik, Form } from "formik";
import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
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
// import { ReactComponent as Facebook } from "../../assets/svg/facebook-1.svg";
// import { ReactComponent as Google } from "../../assets/svg/google.svg";
import { auth } from "../../api/auth";
import { setItems } from "../../utils/localStorage";

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
      const response = await auth.UserLogin("auth/login", user);
      if (response.error) throw new Error(response.error);
      dispatch(loginUser(response));
      setItems("token", response.token.token);
      resetForm();
      navigate("/");
    } catch (error) {
      setMsg({
        title: "Error",
        severity: "error",
        message: `${error}`.replace("Error:", "") || "Email or password incorrect",
      });
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
              <h2>Log in</h2>
              <DividingComponent />
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
                text="¿Olvidaste tu contraseña?"
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
                text="¿No tiene una cuenta? Regístrese"
                type="button"
                className="text"
                onClick={() => setShowLogin(true)}
              />
              {/* <DividingComponent label="Or" />
              <Button text="Login with Facebook" type="button" className="button-login" disabled>
                <Facebook className="icon-facebook" />
              </Button>
              <Button
                text="Login with Google"
                type="button"
                className="button-login btn-google"
                bg="#fff"
                disabled
              >
                <Google className="icon-facebook" />
              </Button> */}
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
