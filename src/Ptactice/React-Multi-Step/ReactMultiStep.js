import React,{useState} from 'react'
import Step1 from './Step1'
//import Step2 from './Step2'


const ReactMultiStep = () => {
    const [formData, setFormData] = useState(
       { name:'', email:''}    
    )
    const [page, setPage] = useState(0);

    const pageList = ['1','2']

    const PageDisplay = ()=>{

        if(page === 0){
            return <Step1 formData={formData} setFormData={setFormData}  />
        } else {
            return <Step2 formData={formData} setFormData={setFormData}  />
        }        
    }

    const previousPage = ()=>{
        setPage((page) => page - 1);
    }

    const nextPage = ()=>{
       if(page === pageList.length - 1){
         alert("Form submitted");
         console.log(formData);
         setPage(0);
       } else {
        setPage(page + 1);
       }
    }


  return (
    <>
      <div>ReactMultiStep</div>
      
        {PageDisplay()}
        <hr />
        <button disabled={page === 0} onClick={previousPage}>
          Back
        </button>

        <button onClick={nextPage}>
          {page === pageList.length - 1 ? "Submit" : "Next"}
        </button>
      
    </>
  );
}

export default ReactMultiStep