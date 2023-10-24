import React from 'react';
import { Facilities } from './Facilities';
import { BreadCrumbs } from './BreadCrumbs';
import { Bars } from './Bars';
import { Price } from './Price';
import Map from "./Map.png";



const SearchPage = () => {
  return (
    <div className="index">
      <BreadCrumbs />
      <img src={Map} alt="Map" className="map-image" />
      <Bars />
      <Price />
      <Facilities />
      
    </div>
  );
};

export default SearchPage;


