import React from 'react';
import './header.css';
import logo from '../../assets/image/logo.png';

const Header = () => {
    return (
        <div className="header-container">
            <div className='row'>
                <div className="navigation-container">
                    <nav>
                        <ul id="navigation">
                            <li><a className="active" href="#">home</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#">About</a></li>
                            <li id='submenu'><a href="#">blog <i className="fa fa-angle-down"></i></a>
                                <ul className="submenu">
                                    <li><a href="#">blog</a></li>
                                    <li><a href="#">single-blog</a></li>
                                </ul>
                            </li>
                            <li id='submenu'><a href="#">Pages <i className="fa fa-angle-down"></i></a>
                                <ul className="submenu">
                                    <li><a href="#">elements</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="logo-img">
                    <a href="#">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className="box2">
                    <div className="socail_links">
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-google-plus"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="book_btn d-none d-xl-block">
                        <a className="#" href="#">+10 367 453 7382</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
