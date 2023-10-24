import React from "react";
import BookingForm from "../BookingForm";
import HotelRoom from "../hotelcard/HotelCard";
function Book() {
  return (
    <div className="hotelspecwrapper">

      <HotelRoom/>
    <BookingForm/>
    </div>
  
  );
}

export default Book;
