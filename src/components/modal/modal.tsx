import React from 'react';
import './modal.css';
import { useSearchPhotoByIdQuery } from '../../store/apiSlice';

type IModalProps = {
  cardActive: string;
  setModalActive: (text: boolean) => void;
};

function Modal({ cardActive, setModalActive }: IModalProps) {
  const { data } = useSearchPhotoByIdQuery(cardActive);

  const handleClick = () => {
    setModalActive(false);
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <button className="button modal__cross" onClick={handleClick} />
        <h2 className="modal__author">{data?.user.name ?? 'No information'}</h2>
        <img className="modal__image" src={data?.urls.regular} alt={data?.description} />
        <div className="modal__info">
          <h3 className="modal__title">{data?.description ?? 'No information'}</h3>
          <p className="modal__description">{data?.alt_description}</p>
          <p className="modal__date">{data?.created_at.split('T')[0] ?? 'No information'}</p>
        </div>
      </div>
      <div className="modal__shadow" onClick={handleClick}></div>
    </div>
  );
}

export default Modal;
