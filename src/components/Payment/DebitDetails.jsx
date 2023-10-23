import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import './Debit.css';

function DebitDetails (){
    return (
       <Form className="DebitForm">
       
        <Row className="Form-group optional">
            <Col className="Orangetext">
            <Form.Control placeholder="Card"/>      
            </Col>
            <Col>
            <Form.Control placeholder="Swish"/>      
            </Col>
            <Col>
            <Form.Control placeholder="Klarna"/>      
            </Col>
            <Col>
            <Form.Control placeholder="PayPal"/>
            </Col>
        </Row>
        <Row className="Form-group">
            <Col>
            <Form.Label>Card number</Form.Label>
            <Form.Control placeholder="1234 1234 1234 1234"/>      
            </Col>
        </Row>
        <Row className="Form-group">
            <Col>
            <Form.Label>Expiry</Form.Label>
            <Form.Control placeholder="MM/YY"/>      
            </Col>
            <Col>
            <Form.Label>CVC</Form.Label>

                <Form.Control placeholder="CVC"/>      
            </Col>
        </Row>
        <Row className="Form-group">
            
            <Col>
            <Form.Label>Country</Form.Label>

            <Form.Select>
            <option>Sverige</option>
            <option>Norge</option>
            <option>Bulgarien</option>
            <option>Estland</option>

          </Form.Select>    
            </Col>
            <Col>
            <Form.Label>Postal code</Form.Label>

                <Form.Control placeholder="90210"/>      
            </Col>  
        </Row>
        <Button variant="primary" size="lg" className="btn">
                Bekräfta Betalning
            </Button>

       </Form>
       
       
    );
}

export default DebitDetails;
