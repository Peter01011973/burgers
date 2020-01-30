import React from 'react';
import './nav-menu.css';
import {NavLink} from 'react-router-dom';

const NavMenu = () => (
    <ul className="nav-menu">
        <li className='nav-menu__item'><NavLink className='link' to='/' exact activeClassName="active">home</NavLink></li>
        <li className='nav-menu__item'><NavLink className='link' to='/menu' activeClassName="active">Menu</NavLink></li>
        <li className='nav-menu__item'><NavLink className='link' to='/slider' activeClassName="active">Slider</NavLink></li>
        <li className='nav-menu__item'><NavLink className='link' to='/about' activeClassName="active">About</NavLink></li>
        <li className='nav-menu__item submenu'><a className='link' href="#">blog <i className="fa fa-angle-down"></i></a>
            <ul className="nav-menu__item__submenu">
                <li><a className='subitem' href="#">blog</a></li>
                <li><a className='subitem' href="#">single-blog</a></li>
            </ul>
        </li>
        <li className='nav-menu__item submenu'><a className='link' href="#">Pages <i className="fa fa-angle-down"></i></a>
            <ul className="nav-menu__item__submenu">
                <li><a className='subitem' href="#">elements</a></li>
            </ul>
        </li>
        <li className='nav-menu__item'><NavLink className='link' to='/contact' activeClassName="active">Contact</NavLink></li>
    </ul>
)

export default NavMenu;
