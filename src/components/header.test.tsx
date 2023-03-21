import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './header';

describe('Header component', () => {
  it('should show main href', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getAllByText(/Main/i)).toBeDefined();
  });

  it('should show about us href', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getAllByText(/About Us/i)).toBeDefined();
  });
});
