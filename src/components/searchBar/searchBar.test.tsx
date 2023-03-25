import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './searchBar';

describe('Search Bar component', () => {
  it('should have placeholder', () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText(/Search for.../i)).toBeDefined();
  });

  it('check user input', async () => {
    render(<SearchBar />);
    const user = userEvent.setup();
    const inputValue = '42';
    const input = screen.getByRole('searchbox') as HTMLInputElement;
    await user.clear(input);
    await user.type(input, inputValue);
    expect(input.value).toBe(inputValue);
  });
});
