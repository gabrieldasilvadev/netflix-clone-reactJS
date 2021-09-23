import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="#">
                    <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-1-1.png"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://cdn.icon-icons.com/icons2/2619/PNG/256/among_us_netflix_icon_156927.png" alt="Usuarip"/>
                </a>
            </div>
        </header>
    );
}