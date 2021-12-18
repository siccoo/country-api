import React from 'react';
import Button from "@material-ui/core/Button";

import "./countrycard.scss";

const CountryCard = () => {
    return (
        <div className="country__card">
            <div className="country__card__wrapper">
                <img src="https://cdn.britannica.com/40/5340-004-B25ED5CF/Flag-Afghanistan.jpg" alt="country name" />
                <h2 className="country__card__name">Afghanistan</h2>
                <h2 className="country__card__region">Asia</h2>
                <Button className="btn btn__primary">Add to cart</Button>
            </div>
        </div>
        
    )
}

export default CountryCard
