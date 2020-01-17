import React from 'react';
import './drawerToggleButton.css';

const DrawerToggleButton = props => (
    <button className = "toggle-button" onClick = {props.clickHandle}>
        <div className = "toggle-button__line"></div>
        <div className = "toggle-button__line"></div>
        <div className = "toggle-button__line"></div>
    </button>
)

export default DrawerToggleButton;