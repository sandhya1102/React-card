import React, { useState } from 'react';
import './BasketballPlayerCard.css';

const BasketballPlayerCard = ({ name, image, position, stats,info }) => {
    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
        setShowMore(!showMore);
    };
    return (
        <div className="player-card">
            <img src={image} alt={`${name}`} className="player-image" />
            <h2 className="player-name">{name}</h2>
            <p className="player-position">{position}</p>
            <div className="player-stats">
                <p>Points per Game: {stats.pointsPerGame}</p>
                <p>Assists per Game: {stats.assistsPerGame}</p>
                <p>Rebounds per Game: {stats.reboundsPerGame}</p>
            </div>
            <button className='player-btn' onClick={handleToggle}>
            {showMore ? 'Read Less' : 'Read More'}
            </button>
            {showMore && (
            <div className="player-additional-info">
                    <p>{info}</p>
                </div>
            )}

    </div>
    )
};

export default BasketballPlayerCard;
