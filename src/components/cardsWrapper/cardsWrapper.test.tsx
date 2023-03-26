import React from 'react';
import { render, screen } from '@testing-library/react';
import CardsWrapper from './cardsWrapper';
import itemsInfo from './../../data/items';

describe('Cards wrapper', () => {
  it('renders component cards wrapper', () => {
    render(<CardsWrapper />);

    expect(screen.getAllByRole('img').length).toBe(itemsInfo.length);
  });
});
