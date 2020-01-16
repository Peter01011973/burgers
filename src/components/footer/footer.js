import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <div className='footer-top-container'>
                    <div className='footer-top-container__item'>
                        <h3>New York</h3>
                        <p>5th flora, 700/D kings road,<br />green lane New York-1782 <br /><a href='#'>info@burger.com</a></p>
                        <a className='phone' href='#'>+10 378 483 6782</a>
                    </div>
                    <div className='footer-top-container__item'>
                        <h3>California</h3>
                        <p>5th flora, 700/D kings road,<br />green lane New York-1782 <br /><a href='#'>info@burger.com</a></p>
                        <a className='phone' href='#'>+10 378 483 6782</a>
                    </div>
                    <div className='footer-top-container__item withInput'>
                        <h3>Stay Connected</h3>
                        <form>
                            <input placeholder='Enter your email' />
                            <button>Sing Up</button>
                        </form>
                        <p>Stay connect with us to get exclusive offer!</p>
                    </div>
                </div>
                <div className='footer-top__social-link-container'>
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
                <div className='footer-top-copyright'>
                    <p>Copyright ©2020 All rights reserved | This template is made with  by <i className="fa fa-heart-o"></i> <a href='#'>Colorlib</a></p>
                </div>
            </div>

        </div>
    )
}

export default Footer;
