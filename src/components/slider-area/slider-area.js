import './slider-area.css';
import React, { Component } from "react";
import banner from '../../assets/image/banner/banner.png';
import banner2 from '../../assets/image/banner/banner2.png';

const backgroundImage = [
    `url(${banner})`,
    `url(${banner2})`
]

export default class SliderArea extends Component {
    state = { currentPos: 0 }

    changeBackground = (index) => {
        let newPos = this.state.currentPos + index;
        if (newPos > backgroundImage.length - 1) { newPos = 0 }
        if (newPos < 0) { newPos = backgroundImage.length - 1 }
        this.setState({ currentPos: newPos });
    }

    render() {
        return (
            <div className='slider-area' style={{ backgroundImage: backgroundImage[this.state.currentPos] }}>
            {/* <div className='slider-area' > */}
                {/* <img src = {banner}/> */}
                <div className='slider-area-navigation'>
                    <div className='slider-area-navigation__prev' onClick={this.changeBackground.bind(this, -1)}>
                        <i className="slider-area-navigation__prev-i fa fa-angle-left"></i>
                    </div>
                    <div className='slider-area-navigation__next' onClick={this.changeBackground.bind(this, 1)}>
                        <i className='slider-area-navigation__next-i fa fa-angle-right' />
                    </div>
                </div>
            </div>
        );
    }
}