import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';

import BasicInfo_1 from './BasicInfo_1';
import BasicInfo_2 from './BasicInfo_2';
import Photos from './Photos';

function MultiStepForm() {
    const [page, setPage] = useState(1);

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
    
    const FormTitles = ["BASIC INFO", "BASIC INFO", "PHOTOS", "PRICE"];

    const PageDisplay = ()=>{
        if (page === 0){
            return <BasicInfo_1 formData={formData} setFormData={setFormData} />
        } else if (page === 1) {
            return <BasicInfo_2 formData={formData} setFormData={setFormData}/>
        } else {
            return <Photos formData={formData} setFormData={setFormData}/>
        }        
    };

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }    
        setValidated(true);
    };

   
    console.log('page', FormTitles[page]);
    console.log('page', page);

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
            <Form noValidate 
                validated={validated} 
                onSubmit={handleSubmit} className='border'
                style={{ height: 'auto', width:'90%', margin:'20px', padding:'10px'}}
            >
            
            <Form.Group className="mb-3">
                <h5>{FormTitles[page]}</h5> 
            </Form.Group>   

            <Form.Group>
                {PageDisplay()}
            </Form.Group>        
            
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap:'wrap',
                justifyContent:'center',
                alignItems: 'end',                
                gap: '10px',
                marginTop:'30px'
            }}>
                <div>
                    <button
                        style={{borderRadius:'25px'}}
                        disabled={page === 0}
                        onClick={()=>{
                            setPage((currPage)=> currPage - 1);
                        }} 
                    >
                    Previous
                    </button>
                </div>

                <div>
                <button  
                    style={{borderRadius:'25px'}}                
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
        </Form>   
    </div>
  );
}

export default MultiStepForm;

