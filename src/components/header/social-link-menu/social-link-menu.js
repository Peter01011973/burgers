import React from 'react';
import './social-link-menu.css';

const SocailLinkMenu = () => {
    return (
        <nav>
            <ul className = 'socialLink'>
                <li><a className = 'socialLink-item' href="#"><i className="fa fa-instagram"></i></a></li>
                <li><a className = 'socialLink-item' href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a className = 'socialLink-item' href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a className = 'socialLink-item' href="#"><i className="fa fa-google-plus"></i></a></li>
            </ul>
        </nav>
    )
}

export default SocailLinkMenu;