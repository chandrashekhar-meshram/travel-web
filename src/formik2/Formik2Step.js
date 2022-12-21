
    import { Box, MenuItem, Button, TextField, FormHelperText} from "@mui/material";
    import { Formik, Form, Field, useFormik, ErrorMessage } from "formik";
    import * as Yup from 'yup';
    import useMediaQuery from "@mui/material/useMediaQuery";
    
    import { checkoutSchema } from "../formik/schemas"; 
    
    const initialValues = {
      name:'',
      email:''
    };
    
    const Formik2 = () =>{
    
      const isNonMobile = useMediaQuery("(min-width:600px)");
      
      const onSubmit = (values, props) => {
        console.log('values = ', values)
        console.log(props)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }
    
       return (
         <Box m="20px" className="bg-success">
           <Formik
            initialValues={initialValues}
            validationSchema={checkoutSchema}
            onSubmit={onSubmit}
           >
             {(props) => (
               <Form>
                 <Field
                   as={TextField}
                   fullWidth
                   lable="name"
                   placeholder="Name"
                   name="name"
                   helperText={<ErrorMessage name="name" />}
                 />
    
                 <Field
                   as={TextField}
                   fullWidth
                   lable="email"
                   placeholder="Email"
                   name="email"
                   helperText={<ErrorMessage name="email" />}
                 />
    
                 <Button
                   type="submit"
                   variant="contained"
                   disabled={props.isSubmitting}
                   color="primary"
                 >
                   {props.isSubmitting ? "Loading" : "Sign up"}
                 </Button>
               </Form>
             )}
           </Formik>
         </Box>
       );
    }
     
      
      export default Formik2;
    


const StepOne = ()=>{

    const onSubmit = (values, props) => {
        console.log('values = ', values)
        console.log(props)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }

return(
    <Formik
    initialValues={initialValues}
    validationSchema={checkoutSchema}
    onSubmit={onSubmit}
   >
     {(props) => (
       <Form>
         <Field
           as={TextField}
           fullWidth
           lable="name"
           placeholder="Name"
           name="name"
           helperText={<ErrorMessage name="name" />}
         />

         <Field
           as={TextField}
           fullWidth
           lable="email"
           placeholder="Email"
           name="email"
           helperText={<ErrorMessage name="email" />}
         />

         <Button
           type="submit"
           variant="contained"
           disabled={props.isSubmitting}
           color="primary"
         >
           {props.isSubmitting ? "Loading" : "Sign up"}
         </Button>
       </Form>
     )}
   </Formik>
)

}





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