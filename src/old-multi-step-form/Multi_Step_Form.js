import React, {useState} from 'react';
import OtherInfo from './OtherInfo';
import PersonalInfo from './PersonalInfo';
import SignUpInfo from './SignUpInfo';

src/old-multi-step-form/Multi_Step_Form.js

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

    const FormTitles = ["Sign Up", "Personal Info", "Other"];

    const PageDisplay = ()=>{
        if (page === 0){
            return <SignUpInfo formData={formData} setFormData={setFormData} />
        } else if (page === 1) {
            return <PersonalInfo formData={formData} setFormData={setFormData}/>
        } else {
            return <OtherInfo formData={formData} setFormData={setFormData}/>
        }        
    };


  return (
    <div className='form'>
        <div className='progressbar'>
            <div
                style={{ width: page === 0 ? '33.3%' 
                                : page == 1 ? '66.6%' 
                                : '100%' 
                       }}   
            >
            </div>
        </div>
        <div className='form-container'>
            <h3>Old Multi_Step_Form</h3>
            <div className='header'>                 
                <h4>Page {page+1} - {FormTitles[page]} </h4>
            </div>
            <div className='body'>{PageDisplay()}</div>
            <div className='footer'>

                <button
                    disabled={page == 0}
                    onClick={()=>{
                        setPage((currPage)=> currPage - 1);
                    }}
                >
                    Prev
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
                        setPage(0);
                    } else {
                        setPage((currPage) => currPage + 1);
                    }                    
                  }}
                >
                    {page === FormTitles.length - 1 ? 'Submit' : 'Next'}
                </button>
            </div>
        </div>
    </div>
  )
}

export default Multi_Step_Form