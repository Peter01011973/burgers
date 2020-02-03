import './home.css';
import React, { Component } from "react";
import banner from '../../assets/image/banner/banner.png';
import banner2 from '../../assets/image/banner/banner2.png';
import prevArrow from '../../assets/image/arrow-left-slider.png';
import nextArrow from '../../assets/image/arrow-right-slider.png';
import SlickHOC from '../../HOC/slickHOC/slickHOC';

const backgroundImage = [ banner, banner2 ]

const Home = () => {

    function HomePageNextArrow({ className, style, onClick }) {        
        return (
            <div
                className={className}
                style={{ ...style, display: "block", }}
                onClick={onClick}                 
            >
                <img className='homePageNextArrow' src={nextArrow} alt = 'nextarrow'/>
            </div>
        );
    }
      
    function HomePagePrevArrow({ className, style, onClick }) {       
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <img className='homePagePrevArrow' src={prevArrow} alt = 'prevarrow'/>
            </div>
        );
    }

    const settings = {
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        className: 'home__slider',
        nextArrow: <HomePageNextArrow />,
        prevArrow: <HomePagePrevArrow />
    }

    const slidesForRender = backgroundImage.map(
        (banner, index) => (
            <div key={index} className='home__slider'>
                <img src = {banner} alt = 'banner'/>
            </div>
        )
    )

    return (
        <div className='home'>
            <SlickHOC settings={settings} slides={slidesForRender}/>
        </div>
    );
}

export default Home;