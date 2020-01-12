import './slider-area.css';
import React from 'react';

const SliderArea = props => {
    return (
        <div className = 'slider-area'>
            {props.children}
        </div>
    )
}

export default SliderArea;