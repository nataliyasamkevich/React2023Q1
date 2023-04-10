import React, { useState } from 'react';
import { ICard } from './../../types/interfaces';
import Card from '../card/card';
import Modal from '../modal/modal';
import Loader from './../loader/loader';
import './cardsWrapper.css';

export interface ICardListProps {
  loading: boolean;
  itemList: ICard[];
}

function CardsWrapper({ loading, itemList }: ICardListProps) {
  const [cardActive, setCardActive] = useState(0);
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        <div className="cards cards__wrapper">
          {itemList.length === 0 ? (
            <p>Nothing found for your request. Please try again...</p>
          ) : (
            itemList.map((item, index) => (
              <Card
                key={item.id}
                card={item}
                index={index}
                setModalActive={setModalActive}
                setCardActive={setCardActive}
              />
            ))
          )}
        </div>
      )}

      {modalActive && <Modal card={itemList[cardActive]} setModalActive={setModalActive} />}
    </>
  );
}

export default CardsWrapper;
