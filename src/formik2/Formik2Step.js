// import React,{useState} from "react";
// import { Box, MenuItem, Button, TextField, FormHelperText} from "@mui/material";
// import { Formik, Form, Field, useFormik, ErrorMessage } from "formik";
// import * as Yup from 'yup';
// import useMediaQuery from "@mui/material/useMediaQuery";
// // import Header from "../../components/Header";

// import { checkoutSchema } from "../formik/schemas"; 

// const initialValues = {
//   name:'',
//   email:'',
//   name2:'',
//   email2:''
// };

// const Formik2Step = () =>{

// const isNonMobile = useMediaQuery("(min-width:600px)");

// const [data, setData]  = useState(initialValues);

// const [currentStep, setCurrentStep] = useState(0);

// const [errors, setErrors] = useState({})

// const handleNextStep = (newData, final = false)=>{
//     setData(prev => ({...prev, ...newData}))
//     if(final){
//         onSubmit(newData); 
//         return;
//     }
//     setCurrentStep(prev => prev + 1)
// }

// const handlePrevStep = (newData)=>{
//     setData(prev => ({...prev, ...newData}))
//     setCurrentStep(prev => prev - 1)
// }

// console.log(data);

// const onSubmit = (values, props) => {
//     console.log('Form Submmited', values)
//     console.log(props)    
   
// }

// const steps = [
//     <StepOne onSubmit={onSubmit} next={handleNextStep} data={data} errors={errors}/>,
//     <StepTwo onSubmit={onSubmit} next={handleNextStep} data={data} prev={handlePrevStep} errors={errors}/>
// ]
// console.log('currentStep = ', currentStep);

//  return(
//         <Box m="20px" className="bg-success">
//            {steps[currentStep]}
//         </Box>
//       )
//     }
    


//     const StepOne = (prop)=>{

//         const onSubmit = (values, props) => {
//             console.log('stepone = ',values)
//             console.log(props)    
//             prop.next(values)    
//         }
        
    
//         return(
//             <Formik 
//             initialValues={prop.data}
//             onSubmit={onSubmit}
//             validationSchema={checkoutSchema}
//            >
//            {()=>(
//                <Form>
//                    <h3>StepOne</h3>
//                    <Field as={TextField }
//                    fullWidth 
//                    lable='name'
//                    placeholder='Name'
//                    name='name'
//                    helperText={<ErrorMessage name='name'/>}
//                    />

//                   <Field as={TextField }
//                    fullWidth 
//                    lable='email'
//                    placeholder='Email'
//                    name='email'
//                    helperText={<ErrorMessage name='email'/>}
//                    />

//                    <Button type='submit' 
//                       variant='contained' 
//                       color='primary'>
//                       Next
//                    </Button>
//                </Form>
//            )}
//           </Formik>
//         )
//     }
        
     
    
//     const StepTwo = (prop)=>{
        
//         const onSubmit = (values, props) => {
//             console.log(values)
//             console.log(props)
//             setTimeout(() => {        
//                 props.resetForm()
//                 props.setSubmitting(false)
//             }, 2000)               
//         }
    
//         return(
//             <Formik 
//             initialValues={prop.data}
//             onSubmit={onSubmit}
//             validationSchema={checkoutSchema}
//            >
//            {(props)=>(
//                <Form>
//                  <h3>StepTwo</h3>
//                    <Field as={TextField }
//                    fullWidth 
//                    lable='name2'
//                    placeholder='Name2'
//                    name='name2'
//                    helperText={<ErrorMessage name='name'/>}
//                    />

//                   <Field as={TextField }
//                    fullWidth 
//                    lable='email2'
//                    placeholder='Email2'
//                    name='email'
//                    helperText={<ErrorMessage name='email'/>}
//                    />

//                    <Button type='submit' 
//                       variant='contained' 
//                       disabled={props.isSubmitting}
//                       color='secondary'>
//                        {props.isSubmitting ? "Loading" : "Submit"}
//                    </Button>
//                </Form>
//            )}
//           </Formik>
//         )
//     }
    


// export default Formik2Step;