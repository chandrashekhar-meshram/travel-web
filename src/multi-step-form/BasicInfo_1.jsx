import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { Editor } from '@tinymce/tinymce-react'

const BasicInfo_1 = () => {

  const categories = [
    {id:'1', name:'Tour'},
    {id:'2', name:'Activity'}
  ];
  const category_types = [
    {id:'1', categoryId:'1', name:'Taj Mahal'},
    {id:'2', categoryId:'1', name:'Kashmir'},
    {id:'3', categoryId:'2', name:"Scuba Diving"},
    {id:'4', categoryId:'2', name:"Banana Ride"}
  ];

  const [category, setCategory] = useState([]);
  const [categoryType, setCategoryType] = useState([]);

  useEffect(()=>{
    setCategory(categories);
  },[])

  const selectCategoryType = (id)=>{
    const data = category_types.filter(item=> item.categoryId === id);
    console.log('selectcategoryfn', data);
    setCategoryType(data);
  }


  return (
    <>
       <h5 className='mb-4'>BASIC INFO</h5>
       <Form.Group className="mb-3" controlId='validate01'>
          <Form.Control type='text' placeholder="Product Title" />
       </Form.Group>
       <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Select onChange={(e)=> selectCategoryType(e.target.value)}>
                <option>Select Category</option>
                {
                  category &&
                  category !== undefined
                  ? category.map((item, index)=>{
                    return(
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    )
                  })
                  :'No Category'
                }   
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Select >
                <option>Category Type</option>
                {
                  categoryType &&
                  categoryType !== undefined
                  ? categoryType.map((item, index)=>{
                    return(
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    )
                  })
                  :"No Category Type"
                }                
              </Form.Select>
            </Form.Group>
        </Row> 
        <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Select >
                <option value="">Duration</option>   
                <option value="1 hour">1 Hour</option>
                <option value="2 hour">2 Hour</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
               <Form.Control type='text' placeholder="" disabled />
            </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group>
            <Editor/>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" >
          <Form.Label>Highlights</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>                   
    </>
  )
}

export default BasicInfo_1