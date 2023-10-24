import React from "react";
import "./style.css";

const FacilityItem = ({ name }) => (
  <div className="facility-item">
    <input type="checkbox" />
    <label>{name}</label>
  </div>
);

const StarRating = ({ stars }) => (
  <div className="star-rating-wrapper">
    <input type="checkbox" />
    <div className="star-rating">
      {Array(stars).fill(null).map((_, idx) => (
        <i key={idx} className="bi bi-star-fill star"></i>
      ))}
    </div>
  </div>
);

export const Facilities = () => {
  return (
    <div className="facilities-container">
      <h2 className="section-title">Faciliteter</h2>
      {["AC", "Pool", "Gym", "Inkl. Frukost", "TV", "Fritt Wi-Fi", "Djur tillåtna"].map(facility => (
        <FacilityItem key={facility} name={facility} />
      ))}
      
      <h2 className="section-title">Gästbetyg</h2>
      {[5, 4, 3, 2, 1].map(stars => (
        <StarRating key={stars} stars={stars} />
      ))}

      <h2 className="section-title">Bekvämligheter</h2>
      {["Barnpassning/barnklubb", "Rullstolsanpassat", "Allergivänligt", "Tysta rum (ljudisolerade)", "Höjd säkerhet"].map(facility => (
        <FacilityItem key={facility} name={facility} />
      ))}
    </div>
  );
};
