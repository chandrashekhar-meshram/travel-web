import React,{useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik"; 
import * as Yup from 'yup'


const initialVal = {
    first_name:'',
    last_name:'',
    email:'',
    password:''
}

const FormikMultiStep = ()=>{

    const [data, setData]  = useState({
        first_name:'',
        last_name:'',
        email:'',
        password:''
    });

    const [currentStep, setCurrentStep] = useState(0);

    const [errors, setErrors] = useState({})
    
    const makeRequest = (formData)=>{
        console.log("Form Submitted", formData);
    }

    const handleNextStep = (newData, final = false)=>{
        setData(prev => ({...prev, ...newData}))
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
        setCurrentStep(prev => prev + 1)
    }

    const handlePrevStep = (newData)=>{
        setData(prev => ({...prev, ...newData}))
        setCurrentStep(prev => prev - 1)
    }

    const steps = [
        <StepOne next={handleNextStep} data={data} errors={errors}/>,
        <StepTwo next={handleNextStep} data={data} prev={handlePrevStep} errors={errors}/>
    ]

    console.log(data);

    return(
        <div>
         <h3>FormikMultiStep</h3>
         {steps[currentStep]}

         <Formik
           
        >
            {()=>(
                <Form>
                    
                  
                </Form>
            )}
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
        prop.next(values)
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
                    name='first_name'
                    placeholder='First Name'
                    />

                    <ErrorMessage name="first_name" />

                    <Field 
                    name='last_name'
                    placeholder='Last Name'
                    />

                    <ErrorMessage name="last_name" />
                    <br/><br/>
                    <button type="submit">
                        Next
                    </button>
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
        prop.data({
            first_name:'',
            last_name:'',
            email:'',
            password:''
        })            
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
                    name='email'
                    placeholder='Email'
                    />

                    <ErrorMessage name="email" />

                    <Field 
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

