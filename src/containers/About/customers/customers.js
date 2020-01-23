import React from 'react';
import './customers.css';
import Slider from 'react-slick';
import Titles from '../../../components/UI/titles/titles';
import avatar1 from '../../../assets/image/testmonial/1.png';
import avatar2 from '../../../assets/image/testmonial/2.png';
import avatar3 from '../../../assets/image/testmonial/3.png';

// const backgroundImage = [
//     `${avatar1}`,
//     `${avatar2}`,
//     `${avatar3}`
// ]

// export default class Customers extends React.Component {
//     state = { currentPos: 0 }

//     changeBackground = (index) => {
//         let newPos = this.state.currentPos + index;
//         if (newPos > backgroundImage.length - 1) { newPos = 0 }
//         if (newPos < 0) { newPos = backgroundImage.length - 1 }
//         this.setState({ currentPos: newPos });
//     }

    // render() {
    //     return (
    //         <div className='customers'>
    //             <div className="customers__conainer">
    //                 <Titles
    //                     title='Testimonials'
    //                     subtitle='Happy customers'
    //                 />
    //                 <div className="customers__container__slide">
    //                     <h2>Hi</h2>
    //                     <div className='customers__container__slide__previ' onClick={this.changeBackground.bind(this, -1)}>
    //                         <i className="fa fa-angle-left"></i>
    //                     </div>
    //                     <div className='customers__container__slide__image'>
    //                         <img src={avatar1} />
    //                     </div>
    //                     <div className='customers__container__slide__nexti' onClick={this.changeBackground.bind(this, 1)}>
    //                         <i className='fa fa-angle-right' />
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
export default class Customers extends React.Component {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        };

        return (
            <div className='customers'>
                <div className="customers__conainer">
                    <Titles
                        title='Testimonials'
                        subtitle='Happy customers'
                    />
                    <div className="customers__container__slide">
                        <Slider {...settings}>
                            <div>
                                <img src={avatar1} />
                            </div>
                            <div>
                                <img src={avatar2} />
                            </div>
                            <div>
                                <img src={avatar3} />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

        );
    }
}
