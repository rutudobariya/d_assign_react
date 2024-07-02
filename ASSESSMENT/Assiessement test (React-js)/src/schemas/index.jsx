import * as Yup from "yup";

export const signUpSchema = Yup.object({
  Email: Yup.string().email().required("Please enter your Email"),
  Password: Yup.string().min(6).required("Please enter your Password"),
  Retype_Password: Yup.string()
    .required()
    .oneOf([Yup.ref("Password"), null], "Password must match"),
  First_Name: Yup.string().min(2).max(25).required("Please enter your First Name"),
  Last_Name: Yup.string().min(2).max(25).required("Please enter your Last Name"),
  Phone_Number: Yup.number().min(10).max(10).required("Please enter your Mobile Name"),
  Address: Yup.string().required("Please enter your Address"),
  Town: Yup.string().required("Please enter your Toun/City"),
  Region: Yup.string().required("Please enter your region"),
  Postcode: Yup.number().min(6).max(6).required("Please enter your area Postcode"),
  Country: Yup.string().required("Please enter your country"),
});
