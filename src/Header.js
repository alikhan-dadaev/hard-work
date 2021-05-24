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
                <Checkout
                    database={props.database}
                />
            </div>
        </div>
    );
}

export default Header;