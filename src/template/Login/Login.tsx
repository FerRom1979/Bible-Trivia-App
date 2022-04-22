import { Formik, Form } from "formik";
import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import LinkComponent from "../../components/LinkComponent/LinkComponent";
import { initialValuesLogin } from "./initialValues";
import { StyledLoginComponent } from "./styled.Login";
import { validationSchema } from "./validationSchema";

const Login = () => {
  const onSubmit = async (values: any, { resetForm }: any) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValuesLogin}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        console.log("Formik props", formik);
        return (
          <>
            {formik.isSubmitting ? (
              <div>Loading...</div>
            ) : (
              <StyledLoginComponent>
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

                  <Button text="Sign In" type="submit" className="button-login" />
                  <LinkComponent routed="/register" text="You do not have an account?" />
                </Form>
              </StyledLoginComponent>
            )}
          </>
        );
      }}
    </Formik>
  );
};

export default Login;
