import React from "react";
import "./ReservationFrame.css";
import { Container } from "react-bootstrap";

export const Frame = () => {
  return (
    <Container className="frame">
      <div className="overlap">
        <div className="text-wrapper">1145 sek / natt</div>
        <p className="div">1145 sek x 5 nätter</p>
        <p className="element-sek">
          <span className="span">5725</span>
          <span className="text-wrapper-2"> sek</span>
        </p>
        <div className="omdme">
          <div className="overlap-group">
            <div className="overlap-group-2">
              <div className="text-wrapper-3">1,203 omdömen</div>
              <div className="text-wrapper-4"><i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>4,3</div>
            </div>
          </div>
        </div>
        <div className="group">
          <div className="endast-reservation">endast reservation, ingen debitering</div>
          <div className="text-wrapper-5">från</div>
          <div className="div-wrapper">
            <div className="text-wrapper-6">Reservera</div>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <div className="div-2">
              <div className="text-wrapper-7">utcheckning</div>
              <div className="text-wrapper-8">2023-09-17</div>
            </div>
            <div className="div-3">
              <div className="text-wrapper-7">incheckning</div>
              <div className="text-wrapper-8">2023-09-12</div>
            </div>
            <div className="div-4">
              <div className="g-ster-antal-rum">gäster &amp; antal rum</div>
              <img className="img" alt="Vector" src="image.svg" />
              <div className="text-wrapper-9">1 gäst</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Frame;