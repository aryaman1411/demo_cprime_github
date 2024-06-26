// src/Calculator.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

test('renders calculator', () => {
  const { getByText } = render(<Calculator />);
  expect(getByText('1')).toBeInTheDocument();
  expect(getByText('2')).toBeInTheDocument();
});

test('performs addition correctly', () => {
  const { getByText, getByRole } = render(<Calculator />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByRole('button', { name: '=' }));
  expect(getByText('3')).toBeInTheDocument();
});

test('clears input and result', () => {
  const { getByText, getByRole } = render(<Calculator />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByRole('button', { name: 'C' }));
  expect(getByRole('textbox')).toHaveValue('');
});
