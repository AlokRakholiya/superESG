import React from "react";
import './header.scss';
import arrdown from '../../../assets/icons/down-black.svg';
import headerlogo from '../../../assets/logo/update-logo.svg';
import headermenu from '../../../assets/icons/headermenu.svg';
export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="header-nav">
                        <img src={headerlogo} alt="logo" />
                        <nav>
                            <a href="#" >Product  </a>
                            <a href="#">Consultant</a>
                            <a href="#">Resources</a>
                            <a href="#">PricingUse cases</a>
                        </nav>
                    </div>
                    <div className="header-buttons">
                        <button className="login-button">Login</button>
                        <button className="gs-button">Get Started</button>
                    </div>
                    <div className="header-menubutton">
                        <img src={headermenu} />
                    </div>
                </div>
            </div>
        </header>
    )
}