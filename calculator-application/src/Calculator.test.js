// src/Calculator.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from './Calculator';

test('renders calculator', () => {
  render(<Calculator />);
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('2')).toBeInTheDocument();
});

test('performs addition correctly', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByRole('button', { name: '=' }));
  const result = screen.getByTestId('result'); // Use data-testid to find the result element
  expect(result).toHaveTextContent('3');
});

test('clears input and result', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByRole('button', { name: 'C' }));
  const result = screen.getByRole('textbox');
  expect(result.value).toBe('');
});
