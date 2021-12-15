import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import Search from "../Search/Search";

import "./navbar.scss";

interface NavbarProps {
  onClick: Function;
  drawerState: boolean;
}

const Navbar = (props: NavbarProps) => {
  const { onClick, drawerState } = props;

  // ON DRAWER CLICK FUNCTION
  const onDrawerClick = () => {
    // CLOSING THE DRAWER CLICK FUNCTION
    onClick(!drawerState);
  };

  return (
    <section className="navbar">
      <div className="navbar__content container">
        {/* LOGO AREA */}
        <div className="navbar__content-left">
          <img
            src={process.env.PUBLIC_URL + "/images/country-api-logo-black.svg"}
            alt="country-api"
          />
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
            <ShoppingCartIcon style={{ cursor: "pointer" }} />
            {/* CART COUNTER  */}
            <span className="navbar__content-cart-counter">10</span>
          </div>
          {/* MENU HAMBURGER ICON */}
          <MenuIcon onClick={onDrawerClick} style={{ cursor: "pointer" }} />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
