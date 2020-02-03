import React from 'react';
import './slickHOC.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// TODO 
const SlickHOC = ({ settings, slides }) => {
    return (
        <Slider {...settings}>
            {slides}
        </Slider>
    );
}

export default SlickHOC;
