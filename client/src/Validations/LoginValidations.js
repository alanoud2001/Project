import * as yup from "yup"; //import all exports from the yup

export const loginSchemaValidation = yup.object().shape({

    email: yup
      .string()
      .email("Not valid email format")
      .required("Email is required"),
    password: yup.string().min(4).max(20).required("Password is required"),
    
  });
  