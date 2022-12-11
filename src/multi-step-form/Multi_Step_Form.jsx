import React, {useState} from 'react';
import BasicInfo_1 from './BasicInfo_1';
import BasicInfo_2 from './BasicInfo_2';
import Photos from './Photos';
import Price from './Price';


const Multi_Step_Form = () => {

    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        username: '',
        nationality: '',
        other: '',
    });

    const FormTitles = ["BasicInfo_1", "BasicInfo_2", "Photos", "Price"];

    const PageDisplay = ()=>{
        if (page === 0){
            return <BasicInfo_1 formData={formData} setFormData={setFormData} />
        } else if (page === 1) {
            return <BasicInfo_2 formData={formData} setFormData={setFormData}/>
        } else {
            return <Photos formData={formData} setFormData={setFormData}/>
        }        
    };

    console.log('page', FormTitles[page]);
    console.log('page', page);

  return (
    <div className='form-container'>
         Multi_Step_Form      

        {/* Form header */}
        <div className='header'>
            <h3>{FormTitles[page]}</h3>
        </div>

        {/* Form Body */}
        <div className='body'>{PageDisplay()}</div>

        {/* Form Footer */}
        <div className='footer'>
            <button
              disabled={page == 0}
              onClick={()=>{
                setPage((currPage)=> currPage - 1);
              }} 
            >
              Previous
            </button>

            <button                  
                  onClick={()=> {
                    if (page === FormTitles.length - 1) {
                        alert('Form Submitted');
                        console.log(formData);
                        setFormData({
                            email: '',
                            password: '',
                            confirmPassword: '',
                            firstName: '',
                            lastName: '',
                            username: '',
                            nationality: '',
                            other:'',                            
                        });
                    } else {
                        setPage((currPage) => currPage + 1);
                    }                    
                  }}
                >
                    {page === FormTitles.length - 1 ? 'Submit' : 'Next'}
                </button>
        </div>          
    </div>
  )
}

export default Multi_Step_Form;