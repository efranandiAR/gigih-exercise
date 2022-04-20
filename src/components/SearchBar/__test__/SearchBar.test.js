import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchBar from '..';

test('renders SearchBar', () => {
  render(<SearchBar />);
  const input = screen.getByLabelText(/search/i);
  expect(input).toBeInTheDocument();
});