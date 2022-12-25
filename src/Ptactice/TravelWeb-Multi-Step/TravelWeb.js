import React,{useState} from "react";

import { Box, MenuItem, Button, TextField, FormHelperText} from "@mui/material";

import { useFormik,Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from 'yup';
import { signUpSchema } from "../../formik/schemas";

import TravelWebForm1 from "./TravelWebForm1";

import TravelWebForm2 from "./TravelWebForm2";

const initialValues = {
  name:'',
 name2:'',
  //name3:''
}

const signUpSchema1 = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter name"),
  // name2: Yup.string().min(2).max(25).required("Please enter name"),
  // name3: Yup.string().min(2).max(25).required("Please enter name"),
});

const signUpSchema2 = Yup.object({
  name2: Yup.string().min(2).max(25).required("Please enter name"),  
});

const TravelWeb = () => {

const [step, setStep] = useState(0);

const formList = [
  'TravelWebForm1' ,
  'TravelWebForm2'
]

const displayForm = ()=>{
  if(step === 0){
    return  <TravelWebForm1 values={initialValues} />
  } else {
    return <TravelWebForm2 values={initialValues}/>
  }
}

const schemas = [signUpSchema1, signUpSchema2]

const prevoiusStep = ()=>{
    setStep(step-1);  
}


const onSubmit = (values, props) => { 
  console.log('Formik2 values = ', values)
  console.log('Formik2 props = ',props)
  if (step === formList.length-1){
    alert("Form Submitted");
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
      setStep(0);
    }, 1000);
  }else{
    setStep(step+1);
  }
}
console.log('step',step+1);

  return (
    <>
      <div>TravelWeb</div>
      <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={schemas[step]}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            {displayForm()}
          
            
            <Button
              type="bunnon"
              color="warning"
              variant="contained"
              disabled={step == 0}
              onClick={prevoiusStep}
            >
              Back
            </Button>
           
            <Button type="submit" color="secondary" variant="contained">
              {(step === formList.length-1) ? "Submit" : "Next"}
            </Button>
          </Form>
        )}
      </Formik>
      </Box>
    </>
  );
}

       



// const Step1 = ({values})=>{
  

//   return(
//     <>
//       <h4>Step1</h4>
//         <Field
//           as={TextField} 
//           fullWidth
//           variant="outlined"
//           type="text"
//           name='name'
//           placeholder='Name' 
//           // onChange={handleChange}
//           // onBlur={handleBlur}
//           values={values.name}
//           helperText={<ErrorMessage name='name'/>}
//         />
//     </>
//   )
// }


// const Step2 = ({values})=>{


//   return(
//     <>
//       <h4>Step2</h4>
//         <Field
//           as={TextField} 
//           fullWidth
//           variant="outlined"
//           type="text"
//           name='name2'
//           placeholder='Name2' 
//           // onChange={handleChange}
//           // onBlur={handleBlur}
//           values={values.name2}
//           helperText={<ErrorMessage name='name2'/>}
//         />
//     </>
//   )
// }

export default TravelWeb