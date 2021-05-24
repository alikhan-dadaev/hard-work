import React from 'react';
import Logo from "./Logo/Logo";
import Menu from "./Menu";
import Checkout from "./Checkout/Checkout";

function Header(props) {
    return (
        <div className="header">
            <div>
                <Logo />
            </div>
            <div>
                <Menu />
            </div>
            <div>
                <Checkout database={props.database}  setDatabase={props.setDatabase} />
            </div>
        </div>
    );
}

export default Header;