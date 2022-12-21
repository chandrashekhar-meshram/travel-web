import * as Yup from 'yup';

export const signUpSchema = Yup.object({
  name2: Yup.string().min(2).max(25).required("Please enter name"),
  email2: Yup.string().email().required("Please enter email"),
    name: Yup.string().min(2).max(25).required("Please enter name"),
    email: Yup.string().email().required("Please enter email"),
    password: Yup.string().min(6).required('Please eneter password'),
    confirm_password: Yup.string().required().oneOf([Yup.ref('password'), null], "Password not matched")
});


const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

export const checkoutSchema = Yup.object().shape({
//   productTitle: Yup.string().required("required"),
//   category: Yup.string().required("required"),
//   categoryType: Yup.string().required("required"),
  email: Yup.string().email("invalid email").required("required"),
  //email2: Yup.string().email("invalid email").required("required"),
//   contact: Yup
//     .string()
//     .matches(phoneRegExp, "Phone number is not valid")
//     .required("required"),
//   address1: Yup.string().required("required"),
//   address2: Yup.string().required("required"),
  name: Yup.string().min(3, "It's too short").required("Required"),
  //name2: Yup.string().min(3, "It's too short").required("Required")
});