import React, { useState } from 'react';
import { Box, MenuItem, Button, TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik"; 


const initialVal = {
  first_name:'',
  last_name:''
}


const Formik2Step = () => {

const [data, setData] = useState(initialVal);
const [currPage, setCurrPage] = useState(0);

const pageList = ['1', '2']

const pageDisplay = ()=>{
  // if(currPage === 0){
  //   return<Step1 data={data} setData={setData}/>
  // } else {
  //   return <Step2 data={data} setData={setData} />
  // }  
}

const previousPage = ()=>{
  setCurrPage(currPage - 1)
}

const nextPage = ()=>{
  if(currPage === pageList.length-1){
     alert('Form Submited');
     console.log(data);
     setData(initialVal);
     setCurrPage(0);
  } else {
    setCurrPage(currPage + 1);
  }
}

const handleSubmit = (values, props)=>{
  console.log('values = ', values);
  console.log('props = ', props);
  if(currPage === pageList.length){      
    //setData(initialVal);
    props.resetForm();   
 }
}




  return (
    <>
     <div>Formik2Step</div>
     <Formik
      initialValues={data}
      onSubmit={handleSubmit} 
     >
      {(values)=>(
        <Form>
           {/* {pageDisplay()} */}
           {
             (currPage === 0) ? (
              <Step1 data={data} setData={setData} values={values} currPage={currPage} pageList={pageList}/>
              ):(
              <Step2 data={data} setData={setData} values={values} currPage={currPage} pageList={pageList} />
              )
           }

          <Button 
            disabled={currPage === 0}
            onClick={previousPage}
          >
            Back
          </Button>
          <Button type='submit' onClick={nextPage}>
           {currPage === pageList.length-1 ? "Submit" : "Next"}
          </Button>           
        </Form>
      )}
     </Formik>        
    </>
  )
}


const Step1 = ({data, setData},)=>{
  const handleSubmit= (values, props)=>{
    console.log("step1 values = ",values);
    console.log(props)
    setData(values)
}   

  return (
    <>
      <div>Step1</div>
      <Formik
        initialValues={data}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Field
              as={TextField}
              name="first_name"
              placeholder="First Name"
              // value={data.first_name}
              // onChange={(e) => setData({ ...data, first_name: e.target.value })}
            />
          </Form>
        )}
      </Formik>
      {/* <Field
      as={TextField}
      name='first_name'
      placeholder='First Name' 
      value={data.first_name}
      onChange={(e)=>setData({...data, first_name: e.target.value})}
     /> */}
    </>
  );
}

const Step2 = ({data, setData})=>{

  return(
    <>
     <div>Step2</div>
     <TextField
      name='last_name'
      placeholder='Last Name' 
      value={data.last_name}
      onChange={(e)=>setData({...data, last_name: e.target.value})}
     />
    </>
  )
}



export default Formik2Step