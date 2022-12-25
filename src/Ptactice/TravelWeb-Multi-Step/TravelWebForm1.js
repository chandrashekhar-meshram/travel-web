import { Box, MenuItem, Button, TextField, FormHelperText} from "@mui/material";

import { Field, ErrorMessage } from "formik";


const TravelWebForm1 = ({values})=>{
  
    return(
      <>
        <h4>TravelWebForm1</h4>
        
        <Field
            as={TextField} 
            fullWidth
            variant="outlined"
            type="text"
            name='name'
            placeholder='Name' 
            // onChange={handleChange}
            // onBlur={handleBlur}
            values={values.name}
            helperText={<ErrorMessage name='name'/>}
          />  
           
      </>
    )
  }

  export default TravelWebForm1;