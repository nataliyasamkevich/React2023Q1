import React from 'react';
import './formCard.css';
import { IFormCard } from '../../types/interfaces';

interface IFormCardProps {
  form: IFormCard;
}

function FormCard({ form }: IFormCardProps) {
  return (
    <div className="form-card">
      <img src={form.photo} alt="photo" />
      <p>Name: {form.name}</p>
      <p>Surname: {form.surname}</p>
      <p>Birthday: {form.date}</p>
      <p>Country: {form.country}</p>
      <p>Gender: {form.gender}</p>
      <p>I consent to my personal data</p>
    </div>
  );
}

export default FormCard;
