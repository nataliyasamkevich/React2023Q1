import React from 'react';
import { IProduct } from 'data/items';
import './card.css';

interface IProductProps {
  product: IProduct;
}

function Card({ product }: IProductProps) {
  return (
    <div className="card">
      <img className="card__image" src={product.thumbnail} alt={product.brand} />
      <div className="card__info">
        <div className="card__title">
          <div className="card__brand">{product.brand}</div>
          <div className="card__name">{product.name}</div>
        </div>
        <div className="card__options">
          <div className="card__details">
            <div className="card__volume">{product.volume} ml</div>
            <div className="card__price">{product.price} €</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
