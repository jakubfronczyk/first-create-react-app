import React from 'react';

function Footer(props) {
    return(
        <footer className={props.darkMode ? "light" : ""}>
            <small>© 2022 Jakub Fronczyk development. All rights reserved.</small>
        </footer>
    )
}

export default Footer;