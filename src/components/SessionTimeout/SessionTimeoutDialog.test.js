import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render } from '../../util/TestSetup';

import SessionTimeoutDialog from './SessionTimeoutDialog';

describe('SessionTimeoutDialog.js Test Suite', () => {
  beforeAll(() => {
    render(<SessionTimeoutDialog />);
  });

  test('should match snapshot', () => {
    const { asFragment } = render(<SessionTimeoutDialog />);

    expect(asFragment()).toMatchSnapshot();
  });
});
