import React from 'react';
import Button from "@material-ui/core/Button";

import "./countrycard.scss";

const CountryCard = () => {
    return (
        <div className="country__card">
            <div className="country__card__wrapper">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FIslamic_Republic_of_Afghanistan&psig=AOvVaw2KgPIqVMmn0mvPd0wU_q0w&ust=1639783565175000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPiokf276fQCFQAAAAAdAAAAABAD" alt="country name" />
                <h2 className="country__card__name">Afghanistan</h2>
                <h2 className="country__card__region">Asia</h2>
            </div>
            <Button className="primary-cta">Add to cart</Button>
        </div>
    )
}

export default CountryCard
