import React from 'react';
import './Header.css';

const Header = () => {
    return (
      <header className="Header">
        <h1>住民投票Map</h1>
        <div className="Header_nav">
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
      </header>
    );
};

export default Header;