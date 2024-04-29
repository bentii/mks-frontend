import { render, fireEvent, screen } from '@testing-library/react';
import Counter from './Counter';

test('calls the correct functions when the buttons are clicked', () => {
  const addOne = jest.fn();
  const removeOne = jest.fn();

  render(<Counter quantity={1} addOne={addOne} removeOne={removeOne} />);

  const incrementButton = screen.getByRole('button', { name: '+' });
  fireEvent.click(incrementButton);

  expect(addOne).toHaveBeenCalledTimes(1);

  const decrementButton = screen.getByRole('button', { name: '-' });
  fireEvent.click(decrementButton);

  expect(removeOne).toHaveBeenCalledTimes(1);
});