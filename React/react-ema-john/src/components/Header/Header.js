import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
<img src={logo} alt="" />
<div>
    <a href="www">Shop</a>
    <a href="www">Orders</a>
    <a href="www">Inventory</a>
    <a href="www">About</a>
</div>
        </nav>
    );
};

export default Header;