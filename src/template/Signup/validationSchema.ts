import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  age: Yup.number().required("This field is required"),
  email: Yup.string().email("Invalid email format").required("This field is required"),
  password: Yup.string()
    .min(8, "password must have at least 8 characters")
    .max(15, "maximum of 15 characters is allowed")
    .required("This field is required"),
  confirmPassword: Yup.string()
    .required("This field is required")
    .oneOf([Yup.ref("password")], "Your passwords do not match."),
});
