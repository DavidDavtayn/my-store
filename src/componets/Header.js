import React from "react";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";

function Header() {
    const counter = useSelector((state) => state.counter);

    return (
        <header id="header">
            <div className="cart-info">
                <FaCartShopping />
                <span>{counter}</span>
            </div>
        </header>
    );
}

export default Header;
