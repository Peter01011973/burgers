import React from 'react';
import './president-burger-area.css';
import burger1 from '../../assets/image/burgers/1.png';
import burger2 from '../../assets/image/burgers/2.png';

const FillDataToPresidentBurgerCard = ({ item: { name, image, text, price } }) => {
    return (
        <div className="single_Burger_President">
            <img src={image} alt="" />
            <div className="room_heading d-flex justify-content-between align-items-center">
                <div className="room_heading_inner">
                    <span>{price}</span>
                    <h3>{name}</h3>
                    <p>{text}</p>
                    <a href="#" className="boxed-btn3">Order Now</a>
                </div>
            </div>
        </div>
    )
}

const PresidentBurgerArea = () => {
    const presidentBurgers = [
        {
            name: 'The Burger President',
            image: burger1,
            text: `Great way to make your business appear trust \nnand relevant.`,
            price: '$20',
            id: 1
        },
        {
            name: 'The Burger President',
            image: burger2,
            text: `Great way to make your business appear trust \nand relevant.`,
            price: '$20',
            id: 2
        }
    ]

    const showPresidentBurgers = presidentBurgers.map(item => <FillDataToPresidentBurgerCard key = { item.id } item = {item}/>)

    return (     
        <div className="Burger_President_area">
            {showPresidentBurgers}
        </div>
    )
}

export default PresidentBurgerArea;

