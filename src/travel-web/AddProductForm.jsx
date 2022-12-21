import React,{useState} from "react";
import { Box, MenuItem, Button, TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik"; 
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
// import Header from "../../components/Header";


const initialValues = {
    productTitle: "",
    // category: "",
    // categoryType: "",
    // duration: "",
    // pickUpLocation: "",
    // description: "",
    // highlight: "",
    // inclusion: "",
    // exclusion: "",
    // faq: "",
    // images: "",
    // video: "",
    // regularPrice: "",
    // salePrice: "",
    // discountType: "",
    // discount: "",
    // depositPercent: "",
    // depositAmount: "",
    // city: "",
    // state: "",
    // country: "",
    geoLocation: ""
  };
  
  const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;


const AddProductForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [data, setData]  = useState(initialValues);

  const [currentStep, setCurrentStep] = useState(0);

  const [errors, setErrors] = useState({})
  
  const makeRequest = (formData)=>{
    console.log("Form Submitted", formData);
}

const handleNextStep = (newData, final = false)=>{
    setData(prev => ({...prev, ...newData}))
    if(final){
        makeRequest(newData); 
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




  return (
    <Box m="20px">
      {/* <Header title="Add Product" subtitle="" /> */}
      <h3>AddProductForm</h3>
         {steps[currentStep]}
      
    </Box>
  );
};


const checkoutSchema1 = yup.object().shape({
    productTitle: yup.string().required("required")
  });

const StepOne = (prop)=>{
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleSubmit = (values)=>{
        console.log("step1 values = ",values);
        prop.next(values)
    }
return (
  <Formik
    onSubmit={handleSubmit}
    initialValues={initialValues}
    validationSchema={checkoutSchema1}
  >
    {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
      <Form onSubmit={handleSubmit}>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <Field
            as={TextField}
            fullWidth
            variant="outlined"
            type="text"
            label="Product Title"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.productTitle}
            name="productTitle"
            error={!!touched.productTitle && !!errors.productTitle}
            helperText={touched.productTitle && errors.productTitle}
            sx={{ gridColumn: "span 4" }}
          />
        </Box>
        <Box display="flex" justifyContent="end" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            Next
          </Button>
        </Box>
      </Form>
    )}
  </Formik>
);
}
  
  const checkoutSchema2 = yup.object().shape({
    // address1: yup.string().required("required"),
    // address2: yup.string().required("required")
    geoLocation: yup.string().required("required")
  });
  
const StepTwo = (prop)=>{
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleSubmit= (values, props)=>{
        prop.next(values, true)
        console.log(props)
        alert('Form Submitted')
        props.resetForm()
        props.setSubmitting(false)
    }

    return (
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema2}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.geoLocation}
                name="geoLocation"
                error={!!touched.geoLocation && !!errors.geoLocation}
                helperText={touched.geoLocation && errors.geoLocation}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>

            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="button" color="primary" variant="contained">
                Back
              </Button>
              <Button type="submit" color="secondary" variant="contained">
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    );
}

export default AddProductForm;
