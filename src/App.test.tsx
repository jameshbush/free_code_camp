import React from 'react';
import { render } from '@testing-library/react';
import TestDemo from "./TestDemo";

test('renders learn react link', () => {
  const { getByText } = render(<TestDemo />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
