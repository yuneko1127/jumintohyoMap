import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
      <header className="Header">
        <h1>住民投票Map</h1>
        <div className="Header_nav">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
      </header>
    );
};

export default Header;