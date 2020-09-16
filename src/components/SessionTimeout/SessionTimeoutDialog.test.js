import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '../../util/TestSetup';

import SessionTimeoutDialog from './SessionTimeoutDialog';

describe('SessionTimeoutDialog.js Test Suite', () => {
  beforeEach(() => {
    render(<SessionTimeoutDialog timeoutScale={1} hasExpiredLimit={15} isExpiringLimit={13} />);
  });

  test('should match snapshot', () => {
    const { asFragment } = render(<SessionTimeoutDialog />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('should render, wait 13 cycles and see the text “Session Almost Expiring”', async () => {
    const text = 'Session Almost Expiring';
    const warning = await waitFor(() => screen.getByText(text));
    expect(warning).toBeInTheDocument();
  });

  test('should render, wait 15 cycles and see the text “Session Expired”', async () => {
    const text = 'Session Expired';
    const expire = await waitFor(() => screen.getByText(text));
    expect(expire).toBeInTheDocument();
  });
});
