import React from 'react';
import { animals } from './animals';
import './index.css';

export const Animals = () => {
    const maxIndex = animals.length - 1
    const randomNumber = Math.floor(Math.random() * (maxIndex + 1));
    const imageSrc = animals[randomNumber].src;

    return (
        <div className="Animals-card">
            <img id="image" src={imageSrc} alt="Logo" />
            <h2>Animals</h2>
            <p>Name: {animals[randomNumber].title}</p>
        </div>
    );
};
