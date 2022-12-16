import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Form from 'react-bootstrap/Form'


const Price = () => {

  const discountType = [
    {id:'1', name:'%'},
    {id:'2', name:'Amount'}
  ];

  const selectDiscountType = ()=>{

  }

  const depositePer = [
    {id:'1', value:'10%'},
    {id:'2', value:'15%'},
    {id:'2', value:'20%'}
  ];

  const depositeAmt = ()=>{

  }


  return (
    <>
    <Container>
      <h5 className='mb-4'>PRICE</h5>
      <Row className="mb-3">
        <Form.Group className="col-sm-6 mb-3"  >
          <Form.Control as="input"  />
        </Form.Group>    
        <Form.Group className="col-sm-6 mb-3"  >
          <Form.Control as="input" placeholder='Sale Price'/>
        </Form.Group>           
      </Row>

      <Row className="mb-3">
            <Form.Group className="col-sm-6 mb-3">
              <Form.Select onChange={(e)=> selectDiscountType(e.target.value)}>
                <option>Discount Type</option>
                {
                  discountType &&
                  discountType !== undefined
                  ? discountType.map((item, index)=>{
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

            <Form.Group className="col-sm-6 mb-3">
              <Form.Select >
                <option>Discount</option>
                {/* {
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
                }                 */}
              </Form.Select>
            </Form.Group>
        </Row> 
        
        <Row className="mb-5">
            <Form.Group className="col-sm-6 mb-3">
              <Form.Select onChange={(e)=> depositeAmt(e.target.value)}>
                <option>Deposit Percent</option>
                {
                  depositePer &&
                  depositePer !== undefined
                  ? depositePer.map((item, index)=>{
                    return(
                      <option key={index} value={item.id}>
                        {item.value}
                      </option>
                    )
                  })
                  :'No Category'
                }   
              </Form.Select>
            </Form.Group>

            <Form.Group className="col-sm-6 mb-3">
              <Form.Select >
                <option>Deposite</option>
                {/* {
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
                }                 */}
              </Form.Select>
            </Form.Group>
        </Row> 

        <Row className="mb-3">
          <h5 className='mb-3'>Location</h5>
          <Form.Group className="col-sm-6 mb-3"  >
            <Form.Control as="input" placeholder='City'/>
          </Form.Group>    
          <Form.Group className="col-sm-6 mb-3"  >
            <Form.Control as="input" placeholder='State'/>
          </Form.Group>           
        </Row>  

        <Row className="mb-3">         
          <Form.Group>
            <Form.Control as="input" placeholder='Google Map Location'/>
          </Form.Group>                   
        </Row>     
    </Container>
    </>
  )
}

export default Price