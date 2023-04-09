import React from 'react';
import { ICard } from '../../types/interfaces';
import './card.css';

export interface ICardProps {
  card: ICard;
}

function Card({ card }: ICardProps) {
  return (
    <div className="card">
      <img className="card__image" src={card.urls.regular} alt={card.description} />
      <h3 className="card__title">{card.user.name ?? 'No title'}</h3>
    </div>
  );
}

export default Card;
