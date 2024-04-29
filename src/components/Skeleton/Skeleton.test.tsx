import React from 'react';
import { render } from '@testing-library/react';
import Skeleton from './Skeleton';

test('renders Skeleton component without crashing', () => {
  render(<Skeleton />);
});