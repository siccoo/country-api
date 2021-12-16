import React from 'react';
import Button from "@material-ui/core/Button";

const CountryCard = () => {
    return (
        <div className="country__card">
            <div className="country__card__wrapper">
                <img src="" alt="country name" />
                <h2 className="country__card__name">Afghanistan</h2>
                <h2 className="country__card__region">Asia</h2>
            </div>
            <Button className="primary-cta">Add to cart</Button>
        </div>
    )
}

export default CountryCard