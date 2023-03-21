import React, { Component } from 'react';
import { IProduct } from 'data/items';
import './card.css';

class Card extends Component<IProduct> {
  render() {
    return (
      <div className="card">
        <img className="card__image" src={this.props.thumbnail} alt={this.props.brand} />
        <div className="card__info">
          <div className="card__title">
            <div className="card__brand">{this.props.brand}</div>
            <div className="card__name">{this.props.name}</div>
          </div>
          <div className="card__options">
            <div className="card__details">
              <div className="card__volume">{this.props.volume} ml</div>
              <div className="card__price">{this.props.price} €</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
