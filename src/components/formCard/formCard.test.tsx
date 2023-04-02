import React from 'react';
import { render, screen } from '@testing-library/react';
import FormCard from './formCard';

const formProductCard = {
  name: 'Nataliya',
  surname: 'Samkevich',
  date: '1998-04-21',
  country: 'Belarus',
  gender: 'female',
  photo: 'https://example.com/image.jpg',
  consent: true,
};

test('renders component', () => {
  render(<FormCard form={formProductCard} />);

  expect(screen.getByText(new RegExp(`Nataliya`, 'i'))).toBeDefined();
  expect(screen.getByText(new RegExp(`Samkevich`, 'i'))).toBeDefined();
  expect(screen.getByText(new RegExp(`Belarus`, 'i'))).toBeDefined();
  expect(screen.getByText(new RegExp(`female`, 'i'))).toBeDefined();
});
