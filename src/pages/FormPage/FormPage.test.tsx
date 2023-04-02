import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import FormPage from './FormPage';
import { act } from 'react-dom/test-utils';

describe('Form Page', () => {
  it('renders Form page', () => {
    render(<FormPage />);
    expect(
      screen.getByRole('heading', {
        name: new RegExp('Form', 'i'),
      })
    );
  });

  it('renders alert message before validation', async () => {
    render(<FormPage />);
    await act(async () => {
      const submitButton = screen.getByRole('button');
      fireEvent.click(submitButton);
    });
    expect(screen.getByText('Please select your photo')).toBeDefined;
  });
});
