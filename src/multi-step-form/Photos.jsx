import React from 'react';
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import img_snow from '../project-img/img_snow.jpg'
import CarouselFade from './component/CarouselFade';


const Photos = () => {
  return (
    <Container className='row-12'>  
      <h5 className='mb-4'>PHOTOS</h5>      
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>

      <div className="img-container col-sm">
        < CarouselFade/>
        
        {/* <img src={img_snow} alt="Snow" style={{minWidth:"30vw", maxWidth:"30vw"}} /> */}
        {/* <button className="btn"><i className="fa fa-close"></i></button>   */}
      </div>

      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Upload Vodeo</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
      
    </Container>
  )
}

export default Photos