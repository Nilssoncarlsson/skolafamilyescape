import React from "react";
import EventDetails from "../EventDetails";
import './hotelspec.css';
import '../Sidebar/homepage.css';
import HotelRooms from "../hotelroomcard/HotelRoomCard";
function HotelSpec() {
  return (
    <div className="hotelspecwrapper">
        <EventDetails/>
        <HotelRooms/>
    </div>
  
  );
}

export default HotelSpec;
