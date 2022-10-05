import { Formik, Form } from "formik";
import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
//import ReCaptCha from "../../components/Recaptcha/Recaptcha";
import Toast from "../../components/Toast";
import { isEmpty } from "../../utils/isEmpty";
import { initialValuesLogin } from "./initialValues";
import { StyledLoginComponent } from "./styled.Login";
import { ILogin } from "./types";
import { validationSchema } from "./validationSchema";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/auth/authSlices";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const Login = ({ setShowLogin }: ILogin) => {
  const captcha = useRef<ReCAPTCHA>(null);
  const navigate = useNavigate();

  const [msg, setMsg] = useState<string>("");

  const dispatch = useDispatch();

  const onSubmit = async (values: any, { resetForm }: any) => {
    const { email, password } = await values;
    const user = {
      email,
      password,
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(user),
      });
      const res = await response.json();
      dispatch(loginUser(res));

      setMsg(res.error || (res.errors && "Email or password incorrect"));
      const token = await captcha.current?.executeAsync();
      // eslint-disable-next-line no-console
      console.log({ token });
      resetForm();
      navigate("/");
    } catch (error) {
      if (error) setMsg("Email or password incorrect");
      resetForm();
    }
  };

  useEffect(() => {
    if (msg) setTimeout(() => setMsg(""), 2000);
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
            {msg && <Toast message={msg} />}
            <Form>
              <h2>Login</h2>
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

              <div className="reCaptcha">
                <ReCAPTCHA
                  sitekey={"6LeopA8iAAAAAATtXk7RZTI7SE4jOSfleAIBRbFV"}
                  size={"invisible"}
                  ref={captcha}
                />
              </div>

              <Button
                text="Sign In"
                type="submit"
                className="button-login"
                disabled={
                  !formik.isValid || formik.isSubmitting || isEmpty(formik.values) || !captcha
                }
              />
              <Button
                text="You do not have an account?"
                type="button"
                className="text"
                onClick={() => setShowLogin(true)}
              />
            </Form>
          </StyledLoginComponent>
        );
      }}
    </Formik>
  );
};

export default Login;
