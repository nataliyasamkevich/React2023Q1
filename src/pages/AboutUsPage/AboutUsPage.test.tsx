import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUsPage from './AboutUsPage/AboutUsPage';

describe('About Us Page', () => {
  it('renders About Us page', () => {
    render(<AboutUsPage />);
    expect(
      screen.getByRole('heading', {
        name: new RegExp('About Us', 'i'),
      })
    );
  });
});
