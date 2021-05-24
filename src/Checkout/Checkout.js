import React from 'react';
import shoping from "./shopping-cart-solid.svg"


function Checkout(props) {
   const counter = props.database.filter((item) => {

        if (item.bought) {
            return true;
        }
})
    console.log(counter)
    return (

        <div className="checkout">
            <img src={shoping} alt="Logotype"/>
            <span className="counter">{counter.length}</span>
        </div>
    );
}

export default Checkout;