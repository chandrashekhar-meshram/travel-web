import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Form from 'react-bootstrap/Form'
import Accordion from 'react-bootstrap/Accordion';

function AlwaysOpenExample() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>1</Accordion.Header>
        <Accordion.Body>
          What are the things to do in advanture boat party?
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2</Accordion.Header>
        <Accordion.Body>
        What are the things to do in advanture boat party?
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}


const BasicInfo_2 = () => {
  return (
    <Container>
       <h5 className='mb-4'>BASIC INFO</h5>
       <Row className="mb-3">
        <Form.Group className="col-sm-6"  >
          <Form.Label>Inclusion</Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>    
        <Form.Group className="col-sm-6"  >
          <Form.Label>Exclusion</Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>           
      </Row>

      <Row className="">
          {/* Accordion */}
          <Form.Group className="col-sm-6 mb-5" >
            <Form.Label>FAQ - ACCORDION</Form.Label>
            { AlwaysOpenExample()}
          </Form.Group> 

          <Form.Group className="col-sm-6"
            style={{marginTop:'30px'}} 
          >
            <Form.Control className="" type='text' placeholder="Title" />
            <Form.Control as="textarea" rows={5} placeholder="Description" className="mt-3"/>
          </Form.Group>           
      </Row>
    </Container>
  )
}

export default BasicInfo_2