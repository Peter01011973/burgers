import React from 'react';
import BestBurgerArea from '../../components/best-burger-area/best-burger-area';
import PresidentBurgerArea from '../../components/president-burger-area/president-burger-area';
import './menu.css';

const Menu = () => {
    return (
        <div>
            <BestBurgerArea />
            <PresidentBurgerArea />
        </div>
    )
}

export default Menu;
