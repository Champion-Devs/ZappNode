import React, {useState, useEffect} from 'react';
import './css/tailwind.generated.css';
import './css/landing.css';

const Header = props => {
    const Navigation = ()=> {
        return(
            <div className="bg-primary">
            <div className="heading-logo">
            <div className="logo">Logo</div>
            </div>
            <div className="heading-navigation-1">
            <li>Features</li>
            <li>Integration</li>
            <li>Pricing</li>
            </div>

            <div className="heading-navigation-2">
            <li>Login</li>
            <li>Register</li>
            </div>
            </div>
        )
    }
    return (
        <>
        <Navigation/>
        </>
    )
}

export default Header;