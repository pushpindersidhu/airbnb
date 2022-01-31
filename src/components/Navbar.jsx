import React from "react";
import logo from "../images/airbnb.svg"


function Navbar() {
    return (
        <nav>
            <img className="nav-logo" src={logo} alt="Airbnb" />
        </nav>
    )
}

export default Navbar;
