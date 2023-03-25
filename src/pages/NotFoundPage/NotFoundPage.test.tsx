import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

describe('Not Found Page', () => {
  it('renders Not Found page', () => {
    render(<NotFoundPage />);
    expect(
      screen.getByRole('heading', {
        name: new RegExp('Page is not found: 404', 'i'),
      })
    );
  });
});
