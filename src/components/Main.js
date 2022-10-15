import React from 'react';

function Main(props) {
    return(
        <main  className={props.darkMode ? "light" : ""}>
            <div>
                <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was orginally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise app, including mobile apps</li>
                </ul>
            </div>
        </main>
    )
}

export default Main