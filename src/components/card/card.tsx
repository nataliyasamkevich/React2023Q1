import React from 'react';
import { ICard } from '../../types/interfaces';
import './card.css';

export interface ICardProps {
  card: ICard;
  setModalActive: (text: boolean) => void;
  setCardActive: (text: number) => void;
  index: number;
}

function Card({ card, setModalActive, setCardActive, index }: ICardProps) {
  const handleClick = () => {
    setModalActive(true);
    setCardActive(index);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img className="card__image" src={card.urls.regular} alt={card.description} />
      <h3 className="card__title">{card.user.name ?? 'No title'}</h3>
    </div>
  );
}

export default Card;
