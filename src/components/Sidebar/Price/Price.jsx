import React from "react";
import "./style.css";

export const Price = () => {
    return (
        <div className="price-container">
            <div className="price-box">
                <span className="currency-label">SEK</span>
                <span className="amount">0</span>
            </div>
            <div className="separator-line"></div>
            <div className="price-box">
                <span className="currency-label">SEK</span>
                <span className="amount">56000</span>
            </div>
        </div>
    );
};
export default Price;