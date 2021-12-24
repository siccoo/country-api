import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { fetchAllCountries } from "../../redux/actions";
import CountryCard from "../CountryCard/CountryCard";

import "./countrylist.scss";

const CountryList = () => {

    
  return (
    <div className="country__list">
      {/* SORT COUNTRY */}
      <div className="country__list__sort"></div>
      {/* COUNTRY CARD LIST */}
      <div className="country__list__card">
        <CountryCard flag={""} name={""} region={""} />
      </div>
      <div className="country__list__pagination"></div>
    </div>
  );
};

export default CountryList;
