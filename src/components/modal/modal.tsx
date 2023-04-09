import React from 'react';
import { ICard } from '../../types/interfaces';
import './modal.css';

type IModalProps = {
  card: ICard;
  setModalActive: (text: boolean) => void;
};

function Modal({ card, setModalActive }: IModalProps) {
  const handleClick = () => {
    setModalActive(false);
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <button className="button modal__cross" onClick={handleClick} />
        <h2 className="modal__author">{card.user.name ?? 'No information'}</h2>
        <img className="modal__image" src={card.urls.regular} alt={card.description} />
        <div className="modal__info">
          <h3 className="modal__title">{card.description ?? 'No information'}</h3>
          <p className="modal__description">{card.alt_description}</p>
          <p className="modal__date">{card.created_at.split('T')[0] ?? 'No information'}</p>
        </div>
      </div>
      <div className="modal__shadow" onClick={handleClick}></div>
    </div>
  );
}

export default Modal;
