import React from "react";
import HotelRooms from "../hotelroomcard/HotelRoomCard";
import BookingForm from "../BookingForm";
import { hotelRoomCards } from "../hotelcard/HotelCard";
import HotelRoom from "../hotelcard/HotelCard";
function Book() {
  return (
    <div className="hotelspecwrapper">
         <h2>Träningsnivåer för alla</h2>
      <p>Oavsett på vilken nivå du ligger på när det kommer till styrka och kondition hittar du något perfekt för dig på vårt fitness bootcamp på Mallorca. Alla som bor på campet är där av samma anledning som dig och tillsammans skapas det en riktigt nice och pushande atmosfär som får dig att orka det där lilla extra.
Och du… glöm inte bort att det här är lika mycket en semester som ett bootcamp - inga träningspass är obligatoriska. På en träningsresa till Mallorca får du den bästa kombinationen av fitness, avslappning, äventyr och strandhäng</p>
     
      <HotelRoom/>
    <BookingForm/>
    </div>
  
  );
}

export default Book;
