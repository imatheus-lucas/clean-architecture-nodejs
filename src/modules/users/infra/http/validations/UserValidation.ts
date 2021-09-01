import * as Yup from "yup";

export const CreateUserValidation = Yup.object({
  body: Yup.object({
    name: Yup.string().required().min(3).max(80),
    email: Yup.string().email().required().min(3).max(180),
    password: Yup.string().required().min(6).max(30),
  }),
});
