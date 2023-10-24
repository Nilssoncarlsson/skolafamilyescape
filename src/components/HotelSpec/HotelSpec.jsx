import React from "react";
import EventDetails from "../EventDetails";
import './hotelspec.css';
import '../Sidebar/homepage.css';

import HotelCard from '../hotelcard/HotelCard';


function HotelSpec() {
  return (
    <div className="hotelspecwrapper">
        <EventDetails/>
        <h2>Träningsnivåer för alla</h2>
      <p>Oavsett på vilken nivå du ligger på när det kommer till styrka och kondition hittar du något perfekt för dig på vårt fitness bootcamp på Mallorca. Alla som bor på campet är där av samma anledning som dig och tillsammans skapas det en riktigt nice och pushande atmosfär som får dig att orka det där lilla extra.
Och du… glöm inte bort att det här är lika mycket en semester som ett bootcamp - inga träningspass är obligatoriska. På en träningsresa till Mallorca får du den bästa kombinationen av fitness, avslappning, äventyr och strandhäng</p>
     
<HotelCard/>
    </div>
  
  );
}

export default HotelSpec;
