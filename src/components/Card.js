import React from 'react';
import './Card.css';

const Card = ({ card, onEdit, onDelete }) => (
  <div className="card">
    <img src={card.image} alt={card.title} />
    <h3>{card.title}</h3>
    <p>{card.description}</p>
    <button onClick={() => onEdit(card)}>Editar</button>
    <button onClick={() => onDelete(card.id)}>Borrar</button>
  </div>
);

export default Card;
