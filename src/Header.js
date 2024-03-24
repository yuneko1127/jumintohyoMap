import React from 'react';
import './Header.css';

const Header = () => {
    return (
      <header className="Header">
        <h1>住民投票Map</h1>
        <div className="Header_nav">
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
      </header>
    );
};

export default Header;