import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render } from '../../util/TestSetup';

import SessionTimeout from './SessionTimeout';
// import { useTranslation } from 'react-i18next';

describe('SessionTimeout.js Test Suite', () => {
  beforeAll(() => {
    render(<SessionTimeout />);
  });

  test('should match snapshot', () => {
    // const timeoutDialog = screen.getByTestId('information-dialog');

    // expect(timeoutDialog).toMatchSnapshot();

    const { asFragment } = render(<SessionTimeout />);

    expect(asFragment()).toMatchSnapshot();
  });

  // test('renders with expired text', () => {
  //   const { t } = useTranslation();
  //   const timeoutDialog = screen.getByText(t('session.expired'),);

  //   expect(timeoutDialog).toBeInTheDocument();
  // });

  // test('has info icon on default type', () => {
  //   const dialogElement = screen.getByText('HEADERR');
  //   const iconElement = screen.getByTestId('message-information');

  //   expect(dialogElement).toBeInTheDocument();
  //   expect(iconElement).toHaveAttribute("style","width: 1.5rem; height: 1.5rem; color: black;");
  // });
});
