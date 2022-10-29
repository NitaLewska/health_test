import './Header.css';
import React from 'react';

export default function Header(props) {
    return(
        <header className={props.theme ? "dark" : ""}>
            <h1>Аналитический тест здоровья </h1>
            <div className="toggler">
            <p className="toggler--light">Light</p>
                <div className="toggler--slider"
                     onClick={props.toggleDarkTheme}>
                    <div className="toggler--slider--circle"></div>
                </div>
            <p className="toggler--dark">Dark</p>
            </div>

        </header>
    )
}