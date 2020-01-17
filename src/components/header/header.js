import React, {Component} from 'react';
import './header.css';
import logo from '../../assets/image/logo.png';
import NavMenu from './nav-menu/nav-menu';
import SocailLinkMenu from '../header/social-link-menu/social-link-menu';
import DrawerToggleButton from './drawerToggleButton/drawerToggleButton';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMobileMenu: false
        }
    }

    mobileMenuRender = () => this.setState(({showMobileMenu})=>({showMobileMenu: !showMobileMenu}))

    render() {
        return (
            <header className="header">

                <div className='header__row'>
                    <div className="header__row-navigation">
                        <NavMenu />
                    </div>
                    <div className='header__row-logo'>
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
                    <DrawerToggleButton className='btn' clickHandle={this.mobileMenuRender} />
                    {this.state.showMobileMenu ? <NavMenu />: null}
                </div>
            </header>
        )
    }
}