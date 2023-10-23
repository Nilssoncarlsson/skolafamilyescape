import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function BookingForm (){
    return (
       <Form>
        <Row>
            <Col>
            <Form.Control placeholder="Förnamn"/>
            </Col>
            <Col>
            <Form.Control placeholder="Efternamn"/>
            </Col>
        </Row>
        <Row>
            <Col>
            <Form.Control placeholder="E-mail"/>
            </Col>
            <Col>
            <Form.Control placeholder="Telefonnummer"/>
            </Col>
        </Row>
        <Form.Group className="mb-3" id="formGridCheckbox">
            <Row>
                <Col>
                <Form.Check type="checkbox" label="Rökfri våning" />
                </Col>
                <Col>
                <Form.Check type="checkbox" label="Våning för rökare" />
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Check type="checkbox" label="Separerade sängar" />
                </Col>
                <Col>
                <Form.Check type="checkbox" label="King size" />
                </Col>
            </Row>
      </Form.Group>
       </Form>
    );
}

export default BookingForm;