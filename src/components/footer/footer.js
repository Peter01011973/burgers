import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className = 'footer'>
            <div className = 'footer-top'>
                <div className = 'footer-top-container'>
                    <div className = 'footer-top-container__item'>
                        <h3>New York</h3>
                        <p>5th flora, 700/D kings road,<br/>green lane New York-1782 <br/><a href='#'>info@burger.com</a></p>
                        <a className = 'phone' href='#'>+10 378 483 6782</a>
                    </div>
                    <div className = 'footer-top-container__item'>
                        <h3>California</h3>
                        <p>5th flora, 700/D kings road,<br/>green lane New York-1782 <br/><a href='#'>info@burger.com</a></p>
                        <a className = 'phone' href='#'>+10 378 483 6782</a>
                    </div>
                    <div className = 'footer-top-container__item withInput'>
                        <h3>Stay Connected</h3>
                        <form>
                            <input placeholder = 'Enter your email'/>
                            <button>Sing Up</button>
                        </form>
                        <p>Stay connect with us to get exclusive offer!</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer;
