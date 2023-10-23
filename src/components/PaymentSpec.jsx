import React from "react";
import Button from 'react-bootstrap/Button';

export const PaymentContainer = () => {
    return (
        <div className="PaymentContainer">
            <div className="text-wrapper">Totalt att betala</div>
            <div className="subtotal">
                <div className="text-wrapper-2">Subtotal</div>
                <div className="text-wrapper-3">5120 sek</div>
            </div>
            <div className="discount">
                <div className="text-wrapper-2">Rabatter</div>
                <div className="text-wrapper-3">0 sek</div>
            </div>
            <div className="total">
                <div className="text-wrapper-4">Total Payment</div>
                <div className="text-wrapper-5">5120 sek</div>
            </div>
            <Button variant="primary" size="lg" className="btn">
                Till Betalning
            </Button>

        </div>
    );
};

export default PaymentContainer;