import './best-burger-area.css';
import React from 'react';
import burger1 from '../../assets/image/burger/1.png';
import burger2 from '../../assets/image/burger/2.png';
import burger3 from '../../assets/image/burger/3.png';
import burger4 from '../../assets/image/burger/4.png';
import burger5 from '../../assets/image/burger/5.png';
import burger6 from '../../assets/image/burger/6.png';
import burger7 from '../../assets/image/burger/7.png';
import burger8 from '../../assets/image/burger/8.png';

const BestBurgeArea = () => {
    const burgersArray = [
        {
            name: 'Beefy Burgers',
            image: burger1,
            text: 'Great way to make your business appear trust and relevant.',
            price: '$5'
        },
        {
            name: 'Burger Boys',
            image: burger2,
            text: 'Great way to make your business appear trust and relevant.',
            price: '$5'
        },
        {
            name: 'Burger Bizz',
            image: burger3,
            text: 'Great way to make your business appear trust and relevant.',
            price: '$5'
        },
        {
            name: 'Crackles Burger',
            image: burger4,
            text: 'Great way to make your business appear trust and relevant.',
            price: '$5'
        },
        {
            name: 'Bull Burgers',
            image: burger5,
            text: 'Great way to make your business appear trust and relevant.',
            price: '$5'
        },
        {
            name: 'Rocket Burgers',
            image: burger6,
            text: 'Great way to make your business appear trust and relevant.',
            price: '$5'
        },
        {
            name: 'Smokin Burgers',
            image: burger7,
            text: 'Great way to make your business appear trust and relevant.',
            price: '$5'
        },
        {
            name: 'Delish Burgers',
            image: burger8,
            text: 'Great way to make your business appear trust and relevant.',
            price: '$5'
        }
    ]

    const renderBurgers = burgersArray.map(({image, name, text, price}) => {
        return (
            <div className="single_delicious">
                <div className="thumb">
                    <img src={image} alt="" />
                </div>
                <div className="info">
                    <h3>{name}</h3>
                    <p>{text}</p>
                    <span>{price}</span>
                </div>
            </div>
        )
    })

    return (
        <div className='best-burger-area'>
            <div className="container">
                <div className="col-lg-12">
                    <div className="section_title text-center mb-80">
                        <span>Burger Menu</span>
                        <h3>Best Ever Burgers</h3>
                    </div>
                </div>
                <div className="row">
                    {renderBurgers}
                </div>
                <div className="row">
                    {/* <div className="col-lg-12"> */}
                        <div className="iteam_links">
                            <a className="boxed-btn5" href="Menu.html">More Items</a>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default BestBurgeArea;