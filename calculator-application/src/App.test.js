// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders calculator', () => {
  render(<App />);
  const calculatorElement = screen.getByText('1');
  expect(calculatorElement).toBeInTheDocument();
});
