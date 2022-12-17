import * as yup from "yup";

export const signupSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Password must be 4 charecter")
      .max(15)
      .test(
        "passwordRequirements",
        "Password must contain number ! @ # $ % ^ & * ( )",
        (value) =>
          [/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/].some(
            (pattern) => pattern.test(value)
          )
      ),
  })
  .required();

export const loginSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Password must be 4 charecter")
      .max(15)
      .test(
        "passwordRequirements",
        "Password must contain number ! @ # $ % ^ & * ( )",
        (value) =>
          [/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/].some(
            (pattern) => pattern.test(value)
          )
      ),
  })
  .required();


export const UserDetailSchema = yup
  .object()
  .shape({
    firstName: yup.string().required("Please enter your firstname"),
    lastName: yup.string().required("Please enter your lastname"),
    mobileNo: yup
      .string()
      .required("Phone number required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      )
      .min(10, "Minimum 10 number required")
      .max(10, "Maximum 10 number required"),
  })
  .required();

// export const ForgetSchema = yup
//   .object()
//   .shape({
//     email: yup
//       .string()
//       .email("Please enter a valid email")
//       .required("Email is required"),
//   })
//   .required();

// export const CompanyDetailSchema = yup
//   .object()
//   .shape({
//     name: yup.string().required("Please enter your name"),
//     companytype: yup.string().required("Please select companytype"),
//   })
//   .required();

