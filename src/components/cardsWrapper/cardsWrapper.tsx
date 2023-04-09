import React, { useState } from 'react';
import { ICard } from './../../types/interfaces';
import Card from '../card/card';
import Modal from '../modal/modal';
import Loader from './../loader/loader';
import './cardsWrapper.css';

export interface ICardListProps {
  itemList: ICard[];
}

function CardsWrapper({ itemList }: ICardListProps) {
  return (
    <div className="cards cards__wrapper">
      {itemList.length === 0 ? (
        <p>Nothing found for your request. Please try again...</p>
      ) : (
        itemList.map((item) => <Card key={item.id} card={item} />)
      )}
    </div>
  );
}

export default CardsWrapper;
