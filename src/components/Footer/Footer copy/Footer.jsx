// Importera de nödvändiga modulerna och filerna vi behöver.
import React from "react"; // Grundläggande React-bibliotek.
import "./style.css"; // Importera CSS-filen för att stila vår komponent.
import logo from "../../Logo.png"; // Lägger till en logotyp från en fil.
import socmed from "./socmed.png"; // Lägger till en logotyp från en fil.

// Detta är vår 'Footer'-komponent. En komponent är som en byggsten i React, en del av gränssnittet.
export const Footer = ({
  className, // En egenskap för att lägga till extra stilklasser om så önskas.
  familyEscapes = "../../Logo.png", // Standardvärde för egenskapen 'familyEscapes'
}) => { // Allt inom denna funktion returneras och visas på webbsidan där denna komponent används.
  return (
   // Huvudbehållare för vår footer. Stilarna sätts med både CSS och direkt via 'style'-attributet.
    <div className={`footer ${className}`} style={{ fontFamily: '"Outfit", Helvetica' }}> 
       {/* Huvudgrupp som innehåller alla element */}
      <div className="overlap-group">
  {/* Behållare för logotyp och sociala medier-ikoner */}
        <div className="logo-socmed-container">
          <img src={logo} alt="Logo" className="footer-logo" />
          <img src={socmed} alt="Logo" className="socmed" />
        </div>
           {/* Lista över hjälpsektioner */}
        <ul className="group">
          <li className="text-wrapper">Hjälp</li>
          <li>Q&amp;A</li>
          <li className="text-wrapper-2">Kontakt</li>
          <li className="text-wrapper-3">Support</li>
        </ul>
         {/* Lista över företagsinformation */}
        <ul className="group-2">
          <li className="text-wrapper">Företagsinformation</li>
          <li>Om oss</li>
          <li className="text-wrapper-2">Press</li>
          <li className="text-wrapper-3">Karriär</li>
        </ul>
        {/* Lista över reseinformation */}
        <ul className="group-3">
          <li className="text-wrapper-4">Resa</li>
          <li>Biluthyrning</li>
          <li className="text-wrapper-2">Hitta flyg</li>
          <li className="text-wrapper-3">Restaurangbokningar</li>
        </ul>
           {/* Lista över policys */}
        <ul className="group-4">
          <li className="text-wrapper-4">Policyer</li>
          <li>Juridisk information</li>
          <li className="text-wrapper-2">Sekretess</li>
          <li className="text-wrapper-3">Cookies</li>
        </ul>
      </div>
    </div>
  );
};
