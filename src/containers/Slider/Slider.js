import React from 'react';
import banner from '../../assets/image/banner/banner.png';
import banner2 from '../../assets/image/banner/banner2.png';
import './Slider.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Slider = () => {
    return (
        <div className='slider'>
            <AwesomeSlider>
                <div data-src={banner}>
                    <p>I want to see what you got.</p>
                </div>
                <div data-src={banner2}>
                    <p>The answer is -- Don't think about it.</p>
                </div>
            </AwesomeSlider>
        </div>
    )
}

export default Slider
