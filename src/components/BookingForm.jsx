import React from "react";


import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { Password } from './components/BookingInput.jsx';


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
            <Password className="password-instance" inputTextClassName="design-component-instance-node" text="E-mail" />
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

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">   
            <Form.Control placeholder="Några andra önskemål?" as="textarea" rows={6} />
        </Form.Group>

        <Form.Group className="mb-3 frame">
        <div className="text-wrapper">Återbetalningsbar</div>
        <p className="div">Avboka senast 72h innan bokning för full återbetalning</p>
        </Form.Group>

       </Form>
    );
}

export default BookingForm;