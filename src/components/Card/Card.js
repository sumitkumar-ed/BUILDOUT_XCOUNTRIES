import React from 'react';
import './Card.css';

const Card = ({ country }) => (
  <div className="card">
    <img src={country.flag} alt={`Flag of ${country.name}`} className="flag" />
    <p>{country.name}</p>
  </div>
);

export default Card;
