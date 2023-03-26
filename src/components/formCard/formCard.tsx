import React from 'react';
import './formCard.css';
import { IFormCard } from '../../types/interfaces';

class FormCard extends React.Component<IFormCard> {
  render() {
    return (
      <div className="form-card">
        <img src={URL.createObjectURL(this.props.photo)} alt="photo" />
        <p>Name: {this.props.name}</p>
        <p>Surname: {this.props.surname}</p>
        <p>Birthday: {this.props.date}</p>
        <p>Country: {this.props.country}</p>
        <p>Gender: {this.props.gender}</p>
        <p>I consent to my personal data</p>
      </div>
    );
  }
}

export default FormCard;
