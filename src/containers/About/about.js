import './about.css';
import React from 'react';
import image1 from '../../assets/image/about/1.png';
import image2 from '../../assets/image/about/2.png';
import Customers from './customers/customers';
// import signature from '../../assets/image/about/jessica-signature.png';
import Video from './Video/video';

const About = () => {
    return (
        <div className='about-area'>
            <div className='about-area__container'>
                <div className='about-area__row'>
                    <div className='about-area__images'>
                        <div className='about-area__image1'>
                            <img className='about-area__img-1' src={image1} alt='a men under the other' />
                        </div>
                        <div className='about-area__image2'>
                            <img className='about-area__img-2' src={image2} alt='a men above the other' />
                        </div>
                    </div>
                    <div className='about-area-info'>
                        <div className='about-area-info_titles'>
                            <span className = 'about-area-info__title'>About us</span>
                            <h3 className = 'about-area-info__subtitle'>{`Best BURGER\nIN Your CITY`}</h3>
                            <p className = 'about-area-info__text'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate</p>
                        </div>
                        <div className = 'about-area-info__signature'>
                            {/* <img src = {signature} alt = 'jessica signature'/> */}
                        </div>
                    </div>
                </div>
            </div>
            <Customers />
            <Video />
        </div>
    )
}

export default About;