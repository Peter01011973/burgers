import React from 'react';
import BestBurgerArea from '../best-burger-area/best-burger-area';
import PresidentBurgerArea from '../president-burger-area/president-burger-area';
import './all-menu.css';

const AllBurgersMenu = () => {
    return (
        <div>
            <BestBurgerArea />
            <PresidentBurgerArea />
        </div>
    )
}

export default AllBurgersMenu;
