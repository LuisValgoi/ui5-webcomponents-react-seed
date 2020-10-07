import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { getTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import { render, screen } from '../../util/TestSetup';

import LanguageSwitchDialog from './LanguageSwitchDialog';

describe('LanguageSwitchDialog.js Test Suite', () => {
  test('Should render', () => {
    const dialog = <LanguageSwitchDialog />;
    render(dialog);
    const infoDialog = screen.getByTestId('language-switch-wrapper');
    expect(infoDialog).toBeInTheDocument();
  });

  test('Should load sap_fiori_3 as default theme', () => {
    render(<LanguageSwitchDialog />);
    const currentTheme = getTheme();
    expect(currentTheme).toBe('sap_fiori_3');
  });

  test('Should load black contrast theme', () => {
    const themeSet = 'sap_fiori_3_hcb';
    render(<LanguageSwitchDialog storedTheme={themeSet} />);
    const currentTheme = getTheme();
    expect(currentTheme).toBe(themeSet);
  });

  test('Should load belize theme', () => {
    const themeSet = 'sap_belize';
    render(<LanguageSwitchDialog storedTheme={themeSet} />);
    const currentTheme = getTheme();
    expect(currentTheme).toBe(themeSet);
  });
});
