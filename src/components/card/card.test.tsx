import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './card';
import itemsInfo from './../../data/items';

describe('Card component', () => {
  it('renders component', () => {
    const { brand, name, volume, price, thumbnail } = itemsInfo[0];
    render(<Card brand={brand} name={name} volume={volume} price={price} thumbnail={thumbnail} />);

    const img = screen.getByAltText(new RegExp(brand, 'i')) as HTMLImageElement;
    expect(img.src).toBe(thumbnail);
    expect(img.alt).toBe(brand);

    expect(screen.getByText(new RegExp(`${brand}`, 'i'))).toBeDefined();
    expect(screen.getByText(new RegExp(`${name}`, 'i'))).toBeDefined();
    expect(screen.getByText(new RegExp(`${volume} ml`, 'i'))).toBeDefined();
    expect(screen.getByText(new RegExp(`${price} €`, 'i'))).toBeDefined();
  });
});
