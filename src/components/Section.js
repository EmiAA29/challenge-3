import React from 'react';
import Card from './Card';
import './Section.css';

const Section = ({ title, cards, onEdit, onDelete }) => (
  <section className="section">
    <h2>{title}</h2>
    <div className="cards-container">
      {cards.map(card => (
        <Card key={card.id} card={card} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  </section>
);

export default Section;
