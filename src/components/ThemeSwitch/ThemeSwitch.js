import React from 'react';
import { useTranslation } from 'react-i18next';

import { Option } from '@ui5/webcomponents-react/lib/Option';
import { Select } from '@ui5/webcomponents-react/lib/Select';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import InformationDialog from '../InformationDialog/InformationDialog';

const ThemeSwitch = ({ dialogRef, storedTheme = localStorage.getItem('reactSeedSelectedTheme') }) => {
  const { t } = useTranslation();
  setTheme(storedTheme ? storedTheme : 'sap_fiori_3');

  const onChange = (event) => {
    storedTheme = event.detail.selectedOption.dataset.value;
    localStorage.setItem('reactSeedSelectedTheme', storedTheme);
    setTheme(storedTheme);
  };
  const themeOptions = [
    { value: 'sap_fiori_3', title: t('shell.button.user.settings.item.themeSwitch.option.default') },
    { value: 'sap_fiori_3_dark', title: t('shell.button.user.settings.item.themeSwitch.option.dark') },
    { value: 'sap_belize', title: t('shell.button.user.settings.item.themeSwitch.option.belize') },
    { value: 'sap_fiori_3_hcb', title: t('shell.button.user.settings.item.themeSwitch.option.highContrastBlack') },
    { value: 'sap_fiori_3_hcw', title: t('shell.button.user.settings.item.themeSwitch.option.highContrastWhite') },
  ];
  const style = {
    select: {
      width: '100%',
    },
  };

  return (
    <InformationDialog dialogRef={dialogRef} headerText={t('shell.button.user.settings.item.themeSwitch.title')}>
      <Select onChange={onChange} style={style.select} data-testid="language-switch-wrapper">
        {themeOptions &&
          themeOptions.map((option) => {
            return (
              <Option key={option.value} data-value={option.value} selected={option.value === storedTheme}>
                {option.title}
              </Option>
            );
          })}
      </Select>
    </InformationDialog>
  );
};

export default ThemeSwitch;
