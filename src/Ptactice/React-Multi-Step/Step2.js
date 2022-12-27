import React from 'react'

const Step2 = ({formData, setFormData}) => {
  return (
    <>
    <div>Step2</div>
    Email: 
    <input value={formData.email} 
    onChange={(e)=> setFormData({
        ...formData, email:e.target.value
    })}  />
    </>
  )
}

export default Step2