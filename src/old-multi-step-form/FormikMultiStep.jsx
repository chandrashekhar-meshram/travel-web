import React,{useState} from "react";
import { Box, MenuItem, Button, TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik"; 
import * as Yup from 'yup';


const initialVal = {
    first_name:'',
    last_name:'',
    email:'',
    password:''
}

const FormikMultiStep = ()=>{

    const [data, setData]  = useState(initialVal);

    const [currentStep, setCurrentStep] = useState(0);

    const [errors, setErrors] = useState({})
    
    var steps = [
        <StepOne next={handleNextStep} data={data}  steps={steps} currentStep={currentStep}  />,
        <StepTwo next={handleNextStep} data={data} setData={setData} prev={handlePrevStep} initialVal={initialVal}/>
    ]
    
    
    const makeRequest = (formData)=>{
        console.log("Form Submitted", formData);
    }

    var handleNextStep = (newData, final = false)=>{

        setData(currentStep => ({...currentStep, ...newData}))
        if(final){
            makeRequest(newData); 
            setData({
                first_name:'',
                last_name:'',
                email:'',
                password:''
            });
            return;
        }
        setCurrentStep(currentStep => currentStep + 1)
    }

    var handlePrevStep = (newData)=>{
        setData(currentStep => ({...currentStep, ...newData}))
        setCurrentStep(currentStep => currentStep - 1)
    }

   

    console.log(data);

    return(
        <div>
         <h3>FormikMultiStep</h3>
         {steps[currentStep]}

         <Formik
           
        >
            {/* {()=>(
                <Form>
                    
                  
                </Form>
            )} */}
        </Formik>
        </div>
    )
}

const stepOneValidationScema = Yup.object({
    first_name: Yup.string().required().label("First Name"),
    last_name: Yup.string().required().label("Last Name")
})



const StepOne = (prop)=>{
    const handleSubmit= (values, props)=>{
        console.log("step1 values = ",values);
        console.log(props)
        //prop.next(values)
        // prop.setData({values})
        // if(prop.currentStep <= 2){
        //     props.resetForm()
        // }
    }   

    return(
        <Formik
            initialValues={prop.data}
            onSubmit={handleSubmit}
            validationSchema={stepOneValidationScema}
        >
            {()=>(
                <Form>                    
                    <Field 
                    as={TextField}
                    name='first_name'
                    placeholder='First Name'
                    />

                    <ErrorMessage name="first_name" />

                    <Field 
                    as={TextField}
                    name='last_name'
                    placeholder='Last Name'
                    />

                    <ErrorMessage name="last_name" />
                    <br/><br/>
                    <Button type="submit">
                        Next
                    </Button>
                </Form>
            )}
        </Formik>
    )
}


const stepTwoValidationScema = Yup.object({
    email: Yup.string().required().label("Email"),
    password: Yup.string().required().label("Password")
})


const StepTwo = (prop)=>{

    const handleSubmit= (values, props)=>{
        prop.next(values, true)
        console.log(props)
        alert('Form Submitted')
        props.resetForm()
        props.setSubmitting(false)
        //prop.setData(prop.initialVal)            
    }

    return(
        <Formik
            initialValues={prop.data}
            onSubmit={handleSubmit}
            validationSchema={stepTwoValidationScema}
        >
            {({values})=>(
                <Form>
                    <Field 
                    as={TextField}
                    name='email'
                    placeholder='Email'
                    />

                    <ErrorMessage name="email" />

                    <Field 
                    as={TextField}
                    name='password'
                    placeholder='Password'
                    />

                    <ErrorMessage name="password" />
                    <div>
                        <button 
                          type="button"
                          onClick={()=> prop.prev(values)}
                        >
                            Back
                        </button>
                        <button type="submit">
                            Submit
                        </button>
                           
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default FormikMultiStep;

