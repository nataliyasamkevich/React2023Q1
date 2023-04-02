import React, { useState } from 'react';
import './FormPage.css';
import { IFormCard } from '../../types/interfaces';
import Form from '../../components/form/form';
import FormCard from '../../components/formCard/formCard';

function FormPage() {
  const [products, setProducts] = useState<IFormCard[]>([]);

  const onChangeProduct = (newProduct: IFormCard) => {
    setProducts([...products, newProduct]);
  };

  return (
    <main>
      <h2>Form</h2>
      <Form addFormCard={onChangeProduct} />
      <div className="form-cards">
        {products.map((card: IFormCard, index) => {
          return <FormCard form={card} key={index} />;
        })}
      </div>
    </main>
  );
}

export default FormPage;
