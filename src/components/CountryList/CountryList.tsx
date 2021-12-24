import React from "react";
import CountryCard from "../CountryCard/CountryCard";

import "./countrylist.scss";

const CountryList = () => {
  return (
    <div className="country__list">
      {/* SORT COUNTRY */}
      <div className="country__list__sort"></div>
      {/* COUNTRY CARD LIST */}
      <div className="country__list__card">
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </div>
      <div className="country__list__pagination"></div>
    </div>
  );
};

export default CountryList;
