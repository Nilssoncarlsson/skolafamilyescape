// Import necessary components from React and React Bootstrap
import React from "react";
import Button from 'react-bootstrap/Button';

// Define a React functional component called PaymentContainer
export const PaymentContainer = () => {
    return (
        // Start a div with a CSS class named "PaymentContainer"
        <div className="PaymentContainer">
            {/* Display text for the total amount to be paid */}
            <div className="text-wrapper">Totalt att betala</div>
            
            {/* Create a section for subtotal information */}
            <div className="subtotal">
                {/* Display text for "Subtotal" */}
                <div className="text-wrapper-2">Subtotal</div>
                
                {/* Display the subtotal amount (5120 SEK) */}
                <div className="text-wrapper-3">5120 sek</div>
            </div>
            
            {/* Create a section for discount information */}
            <div className="discount">
                {/* Display text for "Rabatter" (Discounts) */}
                <div className="text-wrapper-2">Rabatter</div>
                
                {/* Display the discount amount (0 SEK) */}
                <div className="text-wrapper-3">0 sek</div>
            </div>
            
            {/* Create a section for the total payment amount */}
            <div className="total">
                {/* Display text for "Total Payment" */}
                <div className="text-wrapper-4">Total Payment</div>
                
                {/* Display the total payment amount (5120 SEK) */}
                <div className="text-wrapper-5">5120 sek</div>
            </div>
            
            {/* Add a button for initiating the payment with Bootstrap styling */}
            <Button variant="primary" size="lg" className="btn">
                Till Betalning
            </Button>
        </div>
    );
};

// Export the PaymentContainer component for use in other parts of the application
export default PaymentContainer;
