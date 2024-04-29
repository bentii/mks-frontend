import { render, screen } from '@testing-library/react';
import Product from './Product';
import '@testing-library/jest-dom';

test('renders without crashing and displays the correct elements', () => {
  const product = {
    id: 1,
    photo: 'url-to-photo',
    brand: 'Test Brand',
    name: 'Test Product',
    price: 100,
  };

  const addToCart = jest.fn();

  render(<Product product={product} addToCart={addToCart} />);

  // Check if the "Add to Cart" button is in the document
  const addToCartButton = screen.getByRole('button', { name: /COMPRAR/i });
  expect(addToCartButton).toBeInTheDocument();
});