import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='nav-ber'>
            <h1>Wellome to my react app</h1>
            <a href="/home">HOME</a>
            <a href="/countries">COUNTRIES</a>
            <a href="/about">ABOUT US</a>
        </div>
    );
};

export default Header;