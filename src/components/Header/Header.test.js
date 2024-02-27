import { render, screen } from '@testing-library/react';
import Header from './Header';
import ThemeContextProvider from '../../context/ThemeContextProvider';

describe('Header component test', () => {
  const isColored = false;
  render(
    <ThemeContextProvider value={{ isColored }}>
      <Header />
    </ThemeContextProvider>
  );

  const info = {
    firstname: 'WILKEN',
    lastname: 'MONTERO',
    position: 'FULL-STACK DEVELOPER'
  };

  it('should have capitalize firstname, lastname and position', () => {
    for (let key in info) {
      const name = screen.getByText(info[key]);
      expect(name).toBeInTheDocument();
    }
  });
});
