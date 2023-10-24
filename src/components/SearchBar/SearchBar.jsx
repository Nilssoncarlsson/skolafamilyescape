import React from "react";
import "./style.css";

export const SearchBar = () => {
  return (
    // Huvudomslutande behållare för sökfältet
    <div className="searchbar">
      {/* En wrapper som hjälper till att positionera och stila inre element */}
      <div className="overlap-group-wrapper">
        {/* En grupp som kan tillåta innehåll att överlappa varandra */}
        <div className="overlap-group">
          {/* Sektion för att välja plats eller destination */}
          <div className="vart">
            {/* Ikon för plats/destination */}
            <i className="vector bi bi-geo-alt-fill"></i>
            {/* Textprompt för användaren att ange en destination */}
            <div className="destination">Destination?</div>
          </div>
          {/* Sektion för att välja antal gäster */}
          <div className="vem">
            {/* Ikon för gäst/individ */}
            <i className="vector man bi bi-person-fill"></i>
            {/* Textprompt för användaren att ange antal gäster */}
            <div className="destination guest">Gäster</div>
          </div>
          {/* Sektion för att välja datum */}
          <div className="nr">
            {/* Ikon för kalender/datum */}
            <i className="vector bi bi-calendar-week"></i>
            {/* Textprompt för användaren att ange ett datum */}
            <div className="text-wrapper">Datum?</div>
          </div>
        </div>
      </div>
    </div>
  );
};
