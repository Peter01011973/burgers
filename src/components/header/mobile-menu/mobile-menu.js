import React from 'react';
// import './mobile-menu.css';
import logo from '../../../assets/image/logo.png';

const MobileMenu = () => (
    <div>
        <a href="#"><img src={logo} alt="logo" /></a>
        <button><i className = "fa fa-bars"></i></button>
    </div>
)

export default MobileMenu;