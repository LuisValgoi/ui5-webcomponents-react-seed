import React from 'react';
import { useTranslation } from 'react-i18next';

import { Option } from '@ui5/webcomponents-react/lib/Option';
import { Select } from '@ui5/webcomponents-react/lib/Select';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import InformationDialog from '../InformationDialog/InformationDialog';

const LanguageSwitchDialog = ({ dialogRef }) => {
  const { t } = useTranslation();
  let selectedTheme = localStorage.getItem('reactSeedSelectedTheme');
  setTheme(selectedTheme);

  const onChange = (event) => {
    selectedTheme = event.detail.selectedOption.dataset.value;
    localStorage.setItem('reactSeedSelectedTheme', selectedTheme);
    setTheme(selectedTheme);
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
      <Select onChange={onChange} style={style.select}>
        {themeOptions &&
          themeOptions.map((option) => {
            return (
              <Option key={option.value} data-value={option.value} selected={option.value === selectedTheme}>
                {option.title}
              </Option>
            );
          })}
      </Select>
    </InformationDialog>
  );
};

export default LanguageSwitchDialog;
