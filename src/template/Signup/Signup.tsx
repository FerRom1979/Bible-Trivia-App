import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { StyledRegister } from "./Styled.Register";
import { initialValuesRegister } from "./initialValuesRegister";
import { validationSchema } from "./validationSchema";
import { ISignup } from "./types";
import { isEmpty } from "../../utils/isEmpty";
import Toast from "../../components/Toast";
import ReCaptCha from "../../components/Recaptcha/Recaptcha";

const Signup = ({ setShowLogin }: ISignup) => {
  const [msg, setMsg] = useState<string>("");
  const [captcha, setCaptcha] = useState<boolean>(false);
  const onSubmit = async (values: any, { resetForm }: any) => {
    const { name, email, password } = await values;
    const user = {
      name,
      email,
      password,
    };
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
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
              <h2>Register</h2>
              <Input
                type="text"
                flexDirection="column"
                label="Name"
                name="name"
                className="login"
                placeholder="name"
                isError={!!formik.errors.name}
              />
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
              <Input
                type="password"
                flexDirection="column"
                label="Confirm Password"
                name="confirmPassword"
                placeholder="confirm password"
                className="login"
                isError={!!formik.errors.confirmPassword}
              />
              {!isEmpty(formik.values) && formik.isValid && (
                <div className="reCaptcha">
                  <ReCaptCha setCaptcha={setCaptcha} />
                </div>
              )}
              <Button
                text="Sign Up"
                type="submit"
                className="button-login"
                disabled={
                  !formik.isValid || formik.isSubmitting || isEmpty(formik.values) || !captcha
                }
              />
              <Button
                text="Do you already have an account?"
                type="button"
                className="text"
                onClick={() => setShowLogin(false)}
              />
            </Form>
          </StyledRegister>
        );
      }}
    </Formik>
  );
};

export default Signup;
