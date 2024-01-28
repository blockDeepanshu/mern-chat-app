import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  name: Yup.string().min(3, "Name should be 3 character long").max(20),
  email: Yup.string().email("Enter a valid email"),
  password: Yup.string()
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),

  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});

export const signInSchema = Yup.object().shape({
  email: Yup.string().email("Enter a valid email"),
  password: Yup.string(),
});
