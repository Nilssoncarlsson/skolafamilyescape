// Import necessary components and styles from React, React Bootstrap, and a custom CSS file
import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../App.css'; // Import CSS styles

// Define a functional component called BookingForm
function BookingForm() {
    return (
        // Start a Form with a CSS class named "BookingForm"
        <Form className="BookingForm">
            {/* Create a row for entering the first name and last name */}
            <Row className="Form-group">
                <Col>
                    {/* Input field for entering the first name */}
                    <Form.Control placeholder="Förnamn"/>
                </Col>
                <Col>
                    {/* Input field for entering the last name */}
                    <Form.Control placeholder="Efternamn"/>
                </Col>
            </Row>

            {/* Create a row for entering email and phone number */}
            <Row className="Form-group">
                <Col>
                    {/* Input field for entering an email address */}
                    <Form.Control placeholder="E-mail"/>
                </Col>
                <Col>
                    {/* Input field for entering a phone number */}
                    <Form.Control placeholder="Telefonnummer"/>
                </Col>
            </Row>

            {/* Create a form group for checkboxes related to room preferences */}
            <Form.Group className="Form-group" id="formGridCheckbox">
                <Row>
                    <Col>
                        {/* Checkbox for "Rökfri våning" (Smoke-free floor) */}
                        <Form.Check type="checkbox" label="Rökfri våning"/>
                    </Col>
                    <Col>
                        {/* Checkbox for "Våning för rökare" (Smoking floor) */}
                        <Form.Check type="checkbox" label="Våning för rökare"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* Checkbox for "Separerade sängar" (Separate beds) */}
                        <Form.Check type="checkbox" label="Separerade sängar"/>
                    </Col>
                    <Col>
                        {/* Checkbox for "King size" bed preference */}
                        <Form.Check type="checkbox" label="King size"/>
                    </Col>
                </Row>
            </Form.Group>

            {/* Create a form group for additional comments or requests */}
            <Form.Group className="Form-group">
                {/* Text area for entering additional comments or requests */}
                <Form.Control placeholder="Några andra önskemål?" as="textarea" rows={8} />
            </Form.Group>

            {/* Create a row for displaying information about cancellation policy */}
            <Row className="infobox">
                <strong>Återbetalningsbar</strong>
                <p>Avboka senast 72h innan bokning för full återbetalning</p>
            </Row>
        </Form>
    );
}

// Export the BookingForm component for use in other parts of the application
export default BookingForm;
