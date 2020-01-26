import React from 'react';
import './slickHOC.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickHOC = ({ settings, children }) => {
    return (
        <Slider {...settings}>
            {children}
        </Slider>
    );
}

export default SlickHOC;
