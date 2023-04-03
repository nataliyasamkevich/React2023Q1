import React from 'react';
import itemsInfo, { IProduct } from './../../data/items';
import Card from './../card/card';
import './cardsWrapper.css';

function CardsWrapper() {
  return (
    <div className="cards cards__wrapper">
      {itemsInfo.map((item: IProduct) => {
        return <Card key={item.id} product={item} />;
      })}
    </div>
  );
}

export default CardsWrapper;
