import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../App.css';
import { Password } from "./BookingInput.jsx";

function BookingForm (){
    return (
       <Form className="Form">
        <Row className="Form-group">
            <Col>
            <Form.Control placeholder="Förnamn"/>      
            </Col>
            <Col>
                {/* <Password className="password-2"
                text="Efternamn" /> */}

                {/* <Password text="Efternamn" /> */}
                <Form.Control placeholder="Efternamn"/>      

            </Col>
        </Row>
        <Row className="Form-group">
            <Col>
            <Form.Control placeholder="E-mail"/>      
            </Col>
            <Col>
            <Form.Control placeholder="Telefonnummer"/>
            </Col>
        </Row>
        <Form.Group className="Form-group" id="formGridCheckbox">
            <Row >
                <Col>
                
                <Form.Check type="checkbox" label="Rökfri våning" />
                </Col>
                <Col>
                <Form.Check type="checkbox" label="Våning för rökare"/>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Check  type="checkbox" label="Separerade sängar" />
                </Col>
                <Col>
                <Form.Check type="checkbox" label="King size" />
                </Col>
            </Row>
        </Form.Group>

        <Form.Group  controlId="exampleForm.ControlTextarea1" className="Form-group" >   
            <Form.Control placeholder="Några andra önskemål?" as="textarea" rows={6} />
        </Form.Group>

            <Row className="infobox">
                <h3>Återbetalningsbar</h3>
                <p>Avboka senast 72h innan bokning för full återbetalning</p>
            </Row>

       </Form>
       
    );
}

export default BookingForm;