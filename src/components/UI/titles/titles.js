import React from 'react';
import './titles.css';

const Titels = ({ title, subtitle }) => {
    return (
        <div className="titles">
            <span className = 'titles__title'>{title}</span>
            <h3 className = 'titles__subtitle'>{subtitle}</h3>
        </div>
    )
}

export default Titels
