// Import necessary components and styles from React and React Bootstrap
import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

// Import a CSS file for styling
import './Debit.css';

// Define a functional component called DebitDetails
function DebitDetails() {
    return (
        // Start a Form with a CSS class named "DebitForm"
        <Form className="DebitForm">

            {/* Create a row for card type selection with labels and icons */}
            <Row className="Form-group optional">
                <Col>
                    {/* Label for "Card" */}
                    <Form.Label>Card</Form.Label>
                </Col>
                <Col>
                    {/* Label for "Swish" */}
                    <Form.Label>Swish</Form.Label>
                </Col>
                <Col>
                    {/* Label for "Klarna" */}
                    <Form.Label>Klarna</Form.Label>
                </Col>
                <Col>
                    {/* Label for "PayPal" */}
                    <Form.Label>PayPal</Form.Label>
                </Col>
            </Row>

            {/* Create a row for entering the card number */}
            <Row className="Form-group">
                <Col>
                    {/* Label for "Card number" */}
                    <Form.Label>Card number</Form.Label>
                    {/* Input field for the card number */}
                    <Form.Control placeholder="1234 1234 1234 1234"/>
                </Col>
            </Row>

            {/* Create a row for entering the card expiry date and CVC */}
            <Row className="Form-group">
                <Col>
                    {/* Label for "Expiry" */}
                    <Form.Label>Expiry</Form.Label>
                    {/* Input field for the expiry date */}
                    <Form.Control placeholder="MM/YY"/>
                </Col>
                <Col>
                    {/* Label for "CVC" (Card Verification Code) */}
                    <Form.Label>CVC</Form.Label>
                    {/* Input field for the CVC */}
                    <Form.Control placeholder="CVC"/>
                </Col>
            </Row>

            {/* Create a row for selecting the country and entering a postal code */}
            <Row className="Form-group">
                <Col>
                    {/* Label for "Country" */}
                    <Form.Label>Country</Form.Label>
                    {/* Dropdown for selecting the country */}
                    <Form.Select>
                        <option>Sverige</option>
                        <option>Norge</option>
                        <option>Bulgarien</option>
                        <option>Estland</option>
                    </Form.Select>
                </Col>
                <Col>
                    {/* Label for "Postal code" */}
                    <Form.Label>Postal code</Form.Label>
                    {/* Input field for the postal code */}
                    <Form.Control placeholder="90210"/>
                </Col>
            </Row>

            {/* Button for confirming the payment */}
            <Button variant="primary" size="lg" className="btn">
                Bekräfta Betalning
            </Button>
        </Form>
    );
}

// Export the DebitDetails component for use in other parts of the application
export default DebitDetails;
