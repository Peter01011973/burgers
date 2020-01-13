import React from 'react';
import './wrapper.css';
import SliderArea from '../slider-area/slider-area';
import BestBurgerArea from '../best-burger-area/best-burger-area';
import PresidentBurgerArea from '../president-burger-area/president-burger-area';
import AboutArea from '../about-area/about-area';
import PreviousNextMethods from '../slider/slider';

const Wrapper = (props) => {
    return(
        <React.Fragment>
            {props.children}
            <SliderArea />
            <BestBurgerArea />
            <PresidentBurgerArea />
            <AboutArea />
            <PreviousNextMethods />
        </React.Fragment>
    )
}

export default Wrapper;