import * as Yup from "yup";
import { PASSWORD_REQUIREMENTS } from "../../constant/regex";

export const validationSchema = Yup.object({
  name: Yup.string().required("This field is required"),
  email: Yup.string().email("Invalid email format").required("This field is required"),
  password: Yup.string()
    .min(8, "password must have at least 8 characters")
    .max(15, "maximum of 15 characters is allowed")
    .required("This field is required")
    .matches(PASSWORD_REQUIREMENTS, {
      message:
        "Your password must include at least 1 uppercase letter, 1 lowercase letter, 1 special character (@$!%*?&), and 1 number.",
    }),
  confirmPassword: Yup.string()
    .required("This field is required")
    .oneOf([Yup.ref("password")], "Your passwords do not match."),
});
