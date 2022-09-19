import React from 'react';
import reactLogo from '../images/react-logo.png';


function Header() {
    return(
        <header>
        <nav className="navbar">
            <div className="nav-logo">
                <img src={reactLogo} alt="React Logo" className="logo"/>
                <h1>ReactFacts</h1>
            </div>
            <h1 className="nav-title">React - Project 1</h1>
        </nav>
    </header>
    )
}

export default Header;