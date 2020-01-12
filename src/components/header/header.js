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
            {/* </div> */}
            {/* <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none">
                                    <div className="slicknav_menu">
                                        <a href="#" aria-haspopup="true" role="button" tabindex="0" className="slicknav_btn slicknav_collapsed">
                                            <span className="slicknav_menutxt">MENU</span>
                                            <span className="slicknav_icon">
                                                <span className="slicknav_icon-bar"></span>
                                                <span className="slicknav_icon-bar"></span>
                                                <span className="slicknav_icon-bar"></span>
                                            </span>
                                        </a>
                                        <ul class="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{display: 'none'}}>
                                            <li><a className="active" href="index.html" role="menuitem" tabindex="-1">home</a></li>
                                            <li><a href="Menu.html" role="menuitem" tabindex="-1">Menu</a></li>
                                            <li><a href="about.html" role="menuitem" tabindex="-1">About</a></li>
                                            <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabindex="-1" className="slicknav_item slicknav_row"><a href="#" tabindex="-1">blog <i className="ti-angle-down"></i></a>
                                        <span className="slicknav_arrow">+</span></a><ul className="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{display: 'none'}}>
                                            <li><a href="blog.html" role="menuitem" tabindex="-1">blog</a></li>
                                            <li><a href="single-blog.html" role="menuitem" tabindex="-1">single-blog</a></li>
                                        </ul>
                                    </li>
                                    <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabindex="-1" className="slicknav_item slicknav_row"><a href="#" tabindex="-1">Pages <i className="ti-angle-down"></i></a>
                                        <span className="slicknav_arrow">+</span></a><ul className="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{display: 'none'}}>
                                            <li><a href="elements.html" role="menuitem" tabindex="-1">elements</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html" role="menuitem" tabindex="-1">Contact</a></li>
                                </ul></div></div>
                            </div> */}
            </div>
        </div>
    )
}

export default Header;
