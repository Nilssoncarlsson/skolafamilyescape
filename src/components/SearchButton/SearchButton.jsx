// Importera PropTypes för att definiera datatyper på props som komponenten tar emot
import PropTypes from "prop-types";

// Importera kärnfunktionalitet från React
import React from "react";

// Importera useReducer, en krok från React som används för att hantera state med reducer-logik
import { useReducer } from "react";

// Importera stilark för denna komponent
import "./style.css";

const SearchButton = ({
  property1,
  className,
  divClassName,
  vectorClassName,
}) => {
  // Använd useReducer för att skapa state och en dispatch-funktion
  // Börjar med antingen den värde som skickats som property1 eller "default"
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`searchbutton ${state.property1} ${className}`}
     //När musen lämnar knappen 
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    //När musen går över knappen
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {/* Text-wrapper inom knappen */}
      <div className={`text-wrapper ${divClassName}`}>sök</div>
      {/* Ikonen för sökning */}
      <i className={`bi bi-search ${vectorClassName}`}></i>
    </div>
  );
};

function reducer(state, action) {
  // En reducer-funktion som tar emot nuvarande state och en action
  // Beroende på action, returnerar den en ny state
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  // Om ingen matchning sker i switch, returnera nuvarande state
  return state;
}

// Definiera vilka props komponenten förväntar sig och vilka datatyper de ska vara
SearchButton.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};

// Exportera SearchButton-komponenten
export { SearchButton };
