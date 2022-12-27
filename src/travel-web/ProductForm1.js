// import React,{useState} from "react";
// import { Box, MenuItem, Button, TextField } from "@mui/material";
// import { Formik, Form, Field, ErrorMessage } from "formik"; 
// import * as yup from "yup";
// import useMediaQuery from "@mui/material/useMediaQuery";


// const checkoutSchema1 = yup.object().shape({
//     productTitle: yup.string().required("required")
//   });

// const ProductForm1 = (prop)=>{
//     const isNonMobile = useMediaQuery("(min-width:600px)");  

//     const handleSubmit = (values)=>{
//         console.log("step1 values = ",values);
//         prop.next(values)
//     }
// return (
//   <Formik
//     onSubmit={handleSubmit}
//     initialValues={prop.formData}
//     validationSchema={checkoutSchema1}
//   >
//     {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
//       <Form onSubmit={handleSubmit}>
//         <Box
//           display="grid"
//           gap="30px"
//           gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//           sx={{
//             "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
//           }}
//         >
//           <Field
//             as={TextField}
//             fullWidth
//             variant="outlined"
//             type="text"
//             label="Product Title"
//             onBlur={handleBlur}
//             onChange={handleChange}
//             value={values.productTitle}
//             name="productTitle"
//             error={!!touched.productTitle && !!errors.productTitle}
//             helperText={touched.productTitle && errors.productTitle}
//             sx={{ gridColumn: "span 4" }}
//           />
//         </Box>
//         <Box display="flex" justifyContent="end" mt="20px">
//           <Button type="submit" color="secondary" variant="contained">
//             Next
//           </Button>
//         </Box>
//       </Form>
//     )}
//   </Formik>
// );
// }

// export default ProductForm1