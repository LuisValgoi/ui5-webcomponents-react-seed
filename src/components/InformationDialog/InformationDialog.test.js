import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render } from '../../util/TestSetup';

import InformationDialog from './InformationDialog';

describe('InformationDialog.js Test Suite', () => {
  beforeAll(() => {
    const dialog = (<InformationDialog headerText="HEADERR" />);
    render(dialog);
    // dialog.open();
  });

  test('should match snapshot', () => {
    const { asFragment } = render(<InformationDialog />);

    expect(asFragment()).toMatchSnapshot();
  });

  // test('renders with "HEADERR" text', () => {
  //   const dialogElement = screen.getByText('HEADERR');

  //   expect(dialogElement).toBeInTheDocument();
  // });

  // test('has info icon on default type', () => {
  //   const dialogElement = screen.getByText('HEADERR');
  //   const iconElement = screen.getByTestId('message-information');

  //   expect(dialogElement).toBeInTheDocument();
  //   expect(iconElement).toHaveAttribute("style","width: 1.5rem; height: 1.5rem; color: black;");
  // });
});
