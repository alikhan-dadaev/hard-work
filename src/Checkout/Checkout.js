import React from 'react';
import shoping from "./shopping-cart-solid.svg"


function Checkout(product) {
    return (
        <div className="checkout">
            <img src={shoping} alt="Logotype"/>
            <span className="counter">0</span>
        </div>
    );
}

export default Checkout;