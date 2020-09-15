import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render } from '../../util/TestSetup';

import InformationDialog from './InformationDialog';

describe('InformationDialog.js Test Suite', () => {
  beforeAll(() => {
    const dialog = <InformationDialog />;
    render(dialog);
  });

  test('should match snapshot', () => {
    const { asFragment } = render(<InformationDialog />);

    expect(asFragment()).toMatchSnapshot();
  });
});
