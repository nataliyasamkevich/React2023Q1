import React from 'react';
import './FormPage.css';
import { IFormCard } from '../../types/interfaces';
import Form from '../../components/form/form';
import FormCard from '../../components/formCard/formCard';
import { useAppSelector } from '../../hooks/redux';

function FormPage() {
  const { cards } = useAppSelector((state) => state.form);

  return (
    <main>
      <h2>Form</h2>
      <Form />
      <div className="form-cards">
        {cards.map((card: IFormCard) => {
          return <FormCard form={card} key={card.id} />;
        })}
      </div>
    </main>
  );
}

export default FormPage;
