import React from 'react';
import { render, screen } from '@testing-library/react';
import FormPage from './FormPage';

describe('Form Page', () => {
  it('renders Form page', () => {
    render(<FormPage />);
    expect(
      screen.getByRole('heading', {
        name: new RegExp('Form', 'i'),
      })
    );
  });
});
