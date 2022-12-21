import React from 'react'


const Form = () => {
  return (
    <>
      <div className='container bg-info' style={{height:'500px'}}>
        <h3 className='text-center'>Form</h3>
        <div className='row gap-1 '>
            <input placeholder='Name' className='mb-3 col-lg-5 col-sm-12'/>

            <input className='mb-3 col-5 ' placeholder='Email' />
        </div>
      </div>      
    </>
  )
}

export default Form;