import React from 'react';
import './header.css';
import logo from '../../assets/image/logo.png';
import NavMenu from './nav-menu/nav-menu';
import SocailLinkMenu from '../header/social-link-menu/social-link-menu';
import DrawerToggleButton from './drawerToggleButton/drawerToggleButton';

const mobileMenu = () => {
    console.log('gfgfgf');
    
    return (
        <NavMenu render = {'Yes'}/>
    )
}

const Header = () => {
    return (
        <header className="header">

            <div className='header__row'>
                <div className="header__row-navigation">
                    <NavMenu />
                </div>
                <div header__row-logo>
                    <a className="logo-img" href="#"><img className='logo_img' src={logo} alt="logo" /></a>
                </div>
                <div className="header__row-info">
                    <div className="socail_links">
                        <SocailLinkMenu />
                    </div>
                    <div className="book_btn">
                        <a className="#" href="#">+10 367 453 7382</a>
                    </div>
                </div>
            </div>
            <div className='mobile-menu'>
                <a className="logo-img" href="#"><img className='logo_img' src={logo} alt="logo" /></a>
                <DrawerToggleButton/>
                <a className='btn' onClick = {mobileMenu}><i className="fa fa-bars"></i></a>
            </div>
        </header>
    )
}

export default Header;
