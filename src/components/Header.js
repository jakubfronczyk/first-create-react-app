import React from 'react';
import reactLogo from '../images/react-logo.png';


function Header(props) {
    return(
        <header>
        <nav className={props.darkMode ? "light":""}>
            <div className="nav-logo">
                <img src={reactLogo} alt="React Logo" className="logo"/>
                <h1>ReactFacts</h1>
            </div>
            <div className="toggler" >
                <p className="toggler-light">Light</p>
                <div   className="toggler-slider">
                    <div className="toggler-slider-circle" onClick={props.toggle}></div>
                </div>
                <p className="toggler-dark">Dark</p>
            </div>
        </nav>
    </header>
    )
}

export default Header;