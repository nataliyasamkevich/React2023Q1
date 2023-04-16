import React, { useState } from 'react';
import Card from '../card/card';
import Modal from '../modal/modal';
import Loader from './../loader/loader';
import './cardsWrapper.css';

import { useAppSelector } from '../../hooks/redux';
import { useSearchPhotosQuery } from '../../store/apiSlice';

function CardsWrapper() {
  const query = useAppSelector((state) => state.search.query);
  const { data = [], isLoading } = useSearchPhotosQuery(query);

  const [cardActive, setCardActive] = useState('');
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && (
        <div className="cards cards__wrapper">
          {data.length === 0 ? (
            <p>Nothing found for your request. Please try again...</p>
          ) : (
            data.map((item) => (
              <Card
                key={item.id}
                card={item}
                setModalActive={setModalActive}
                setCardActive={setCardActive}
              />
            ))
          )}
        </div>
      )}

      {modalActive && <Modal cardActive={cardActive} setModalActive={setModalActive} />}
    </>
  );
}

export default CardsWrapper;
