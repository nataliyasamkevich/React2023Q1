import React, { Component } from 'react';
import itemsInfo from '../data/items';
import Card from './card';
import './cardsWrapper.css';

class CardsWrapper extends Component {
  render() {
    return (
      <div className="cards cards__wrapper">
        {itemsInfo.map((item) => {
          return (
            <Card
              key={item.id}
              brand={item.brand}
              name={item.name}
              volume={item.volume}
              price={item.price}
              thumbnail={item.thumbnail}
            />
          );
        })}
      </div>
    );
  }
}

export default CardsWrapper;
