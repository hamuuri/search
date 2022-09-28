import { render, screen } from '@testing-library/react';
import Search from './Seatch';

test('renders learn react link', () => {
  render(<Search />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
