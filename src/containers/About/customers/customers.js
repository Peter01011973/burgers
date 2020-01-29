import React from 'react';
import './customers.css';
import Titles from '../../../components/UI/titles/titles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar1 from '../../../assets/image/testmonial/1.png';
import avatar2 from '../../../assets/image/testmonial/2.png';
import avatar3 from '../../../assets/image/testmonial/3.png';
import SlickHOC from '../../../HOC/slickHOC/slickHOC';

const slidesArr = [
    {
        name: 'A.H. Shemanto',
        image: avatar1,
        rating: 4.5,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi exercitationem beatae earum inventore repudiandae sit obcaecati!'
    },
    {
        name: 'Kristiana Chouhan',
        image: avatar2,
        rating: 3.5,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi exercitationem beatae earum inventore repudiandae sit obcaecati!'
    },
    {
        name: 'Arafath Hossein',
        image: avatar3,
        rating: 3.5,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi exercitationem beatae earum inventore repudiandae sit obcaecati!'
    }
]

const Rating = ({ stars, name }) => {

    let starsIcons = [];
    for (let i = 0; i < Math.floor(stars); i++) {
        starsIcons.push(<i className="starIcon fa fa-star" key={i}></i>);
    }
    if (stars - Math.floor(stars) > 0.1) { starsIcons.push(<i className="starIcon fa fa-star-half" key={Math.floor(stars)}></i>); }

    return (
        <div className='rating'>
            <h4 className='rating__name'>{name}</h4>
            <div className='rating__stars'>{starsIcons}</div>
        </div>
    )
}

const Customers = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "red" }}
                onClick={onClick}                 
            />
        );
    }
      
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        console.log(props);
        
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        className: 'customerRating',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }

    const slidesForRender = slidesArr.map(
        ({ name, image, rating, text }, index) => (
            <div key={index} className='customerRating'>
                <p className='customerRating__customerRef'>{text}</p>
                <img src={image} alt='' />
                <Rating stars={rating} name={name} />
            </div>
        )
    )

    return (
        <div className='constomers'>
            <div className='constomers__titles'>
                <Titles
                    title='Testimonials'
                    subtitle='Happy customers'
                />
            </div>
            <div className="constomers__slider">
                <SlickHOC settings={settings}>
                    {slidesForRender}
                </SlickHOC>
            </div>
        </div>
    );
}

export default Customers;

