import React from "react";
//import styled from "styled-components";
//import { GlobalStyle } from "./Styles/globalStyles";
import { useFormik, Formik } from "formik";
import { signUpSchema } from "./schemas";

const initialValues = {
    name:'',
    email:'',
    password:'',
    confirm_password:''
}


const Registration = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action)=>{
            console.log(
                "🚀 ~ file: Registration.jsx ~ line 18 ~ Registration ~ values",
                values
              );
            action.resetForm();
        },
    });

    console.log(
        "🚀 ~ file: Registration.jsx ~ line 27 ~ Registration ~ errors",
        errors
      );
  return (
   <>
      <div>Registration</div>
      <form onSubmit={handleSubmit}>
        <div >
            <label htmlFor='name' className="input-label">
                Name
            </label>
            <input
              type='name'
              autoComplete="off"
              name="name"
              id="name"
              placeholder="Name"
              value={values.name} 
              onChange={handleChange}
              onBlur={handleBlur}
            />
             {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
        </div>
        <div >
            <label htmlFor='email' className="input-label">
                Email
            </label>
            <input
              type='email'
              autoComplete="off"
              name="email"
              id="email"
              placeholder="Email"
              value={values.email} 
              onChange={handleChange}
              onBlur={handleBlur}
            />
             {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
        </div>

        <div >
            <label htmlFor='password' className="input-label">
              Password
            </label>
            <input
              type='password'
              autoComplete="off"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password} 
              onChange={handleChange}
              onBlur={handleBlur}
            />
             {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
        </div>

        <div >
            <label htmlFor='confirm_password' className="input-label">
             Confirm Password
            </label>
            <input
              type='password'
              autoComplete="off"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
              value={values.confirm_password} 
              onChange={handleChange}
              onBlur={handleBlur}
            />
             {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error">{errors.confirm_password}</p>
                    ) : null}
        </div>

        <div>
            <button className="input-button" type='submit'>
                Register
            </button>
        </div>
      </form>
   </>
    
  )
}

export default Registration