import React from "react";
import { Facilities } from './Facilities';
// import { Multislider } from './Multislider'; noooope:(
import { BreadCrumbs } from './BreadCrumbs';
//  import { Rooms } from './Rooms';
import { Bars } from './Bars';
import { Price } from './Price';
import Map from "./Map.png";

function Sidebar (){
    return(


      <div><BreadCrumbs />
      <img src={Map} alt="Map" className="map-image" />
      <Bars />
      <Price />
      <Facilities />
</div>

    );
}
export default Sidebar;