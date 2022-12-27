import React from 'react';


const Step1 = ({data, setData}) => {
  
  return (
    <>
    <div>Step1</div>
    <input value={data.name} 
      onChange={(e)=> setData({
        ...data, name: e.target.value
      })}
    />
    </>
  )
}

export default Step1;






// const Step1 = ({formData, setFormData}) => {
//   return (
//     <>
//     <div>Step1</div>
//     Name: 
//     <input value={formData.name} 
//     onChange={(e)=> setFormData({
//         ...formData, name:e.target.value
//     })}  />
//     </>
//   )
// }

// export default Step1