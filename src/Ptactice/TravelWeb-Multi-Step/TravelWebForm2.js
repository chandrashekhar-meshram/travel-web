import { Box, MenuItem, Button, TextField, FormHelperText} from "@mui/material";

import { Field, ErrorMessage } from "formik";


const TravelWebForm2 = ({values})=>{

  
    return(
      <>
        <h4>TravelWebForm2</h4>
        
        <Field
          as={TextField} 
          fullWidth
          variant="outlined"
          type="text"
          name='name2'
          placeholder='Name2' 
          // onChange={handleChange}
          // onBlur={handleBlur}

          values={values.name2}
          helperText={<ErrorMessage name='name2'/>}
        />
        
      </>
    )
  }

  export default TravelWebForm2;