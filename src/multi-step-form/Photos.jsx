import React from 'react';
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const Photos = () => {
  return (
    <Container>        
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>

      
    </Container>
  )
}

export default Photos