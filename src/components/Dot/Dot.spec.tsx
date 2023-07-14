import React from 'react';
import { render } from '@testing-library/react';
import { Dot } from './Dot';

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<Dot variant='red' />);
  });
});
