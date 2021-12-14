import React from 'react';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import Search from '../Search/Search';

import "./navbar.scss";

const Navbar = () => {
    return (
        <section className="navbar"> 
            <div className="navbar__content container">
                {/* LOGO AREA */}
                <div className="navbar__content-left">
                    <img src={process.env.PUBLIC_URL + "/images/country-api-logo-black.svg"} alt="country-api" />
                </div>
                {/* SEARCH BAR AREA */}
                <div className="navbar__content-search">
                    {/* SEARCH BAR COMPONENT */}
                    <Search />
                </div>
                {/* RIGHT ITEMS AREA */}
                <div className="navbar__content-right">
                    {/* SHOPPING CART */}
                    <div className="navbar__content-cart">
                    <ShoppingCartIcon />
                        {/* CART COUNTER  */}
                        <span className="navbar__content-cart-counter">
                            10
                        </span>
                    </div>
                    {/* MENU HAMBURGER ICON */}
                    <MenuIcon />
                </div>
            </div>
        </section>
    )
}

export default Navbar
