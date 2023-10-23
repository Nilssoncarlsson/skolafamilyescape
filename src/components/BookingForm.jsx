import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


function BookingForm (){
    return (
        <Container>
        <FloatingLabel
        controlId="floatingInput"
        label="Förnamn"
        className="mb-3">
             <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      </Container>
    );
}

export default BookingForm;