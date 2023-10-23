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
            <Col><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1439_2121)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.3604 7.86036H0.583008V6.51142C0.583008 5.27039 1.38877 4.26318 2.38159 4.26318H27.5618C28.5546 4.26318 29.3604 5.27039 29.3604 6.51142V7.86036ZM29.3604 12.3568V24.0476C29.3604 24.5246 29.1709 24.9821 28.8336 25.3194C28.4963 25.6567 28.0388 25.8462 27.5618 25.8462H2.38159C1.90458 25.8462 1.4471 25.6567 1.1098 25.3194C0.772501 24.9821 0.583008 24.5246 0.583008 24.0476V12.3568H29.3604ZM7.77735 18.6519C7.30034 18.6519 6.84286 18.8414 6.50556 19.1787C6.16826 19.516 5.97877 19.9734 5.97877 20.4505C5.97877 20.9275 6.16826 21.385 6.50556 21.7223C6.84286 22.0596 7.30034 22.249 7.77735 22.249H9.57594C10.053 22.249 10.5104 22.0596 10.8477 21.7223C11.185 21.385 11.3745 20.9275 11.3745 20.4505C11.3745 19.9734 11.185 19.516 10.8477 19.1787C10.5104 18.8414 10.053 18.6519 9.57594 18.6519H7.77735Z" fill="url(#paint0_linear_1439_2121)"/>
</g>
<defs>
<linearGradient id="paint0_linear_1439_2121" x1="14.9717" y1="4.26318" x2="14.9717" y2="25.8462" gradientUnits="userSpaceOnUse">
<stop stop-color="#FAA316"/>
<stop offset="0.760417" stop-color="#F9A01B"/>
</linearGradient>
<clipPath id="clip0_1439_2121">
<rect width="28.7774" height="28.7774" fill="white" transform="translate(0.583008 0.666016)"/>
</clipPath>
</defs>
</svg>
<br></br>
            <Form.Label>Card</Form.Label>
            </Col>
            <Col>
            
            <Form.Label>Swish</Form.Label>
            </Col>
            <Col>
            <Form.Label>Klarna</Form.Label>
            </Col>
            <Col>
            <Form.Label>PayPal</Form.Label>
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
