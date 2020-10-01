import React from 'react';
import { useTranslation } from 'react-i18next';

import { Option  } from '@ui5/webcomponents-react/lib/Option';
import { Select } from '@ui5/webcomponents-react/lib/Select';
import { Dialog } from '@ui5/webcomponents-react/lib/Dialog';
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";

const LanguageSwitchDialog = ({dialogRef}) => {
  const { t } = useTranslation();
  const onChange = (event) => {
    setTheme(event.detail.selectedOption.dataset.value);
  };
  const themeOptions = [
    { value: 'sap_fiori_3', title: t('shell.button.user.settings.item.themeSwitch.option.default') },
    { value: 'sap_belize_hcb', title: t('shell.button.user.settings.item.themeSwitch.option.highContrastBlack') },    
    { value: 'sap_belize_hcw', title: t('shell.button.user.settings.item.themeSwitch.option.highContrastWhite') },
  ];  

  return (
    <Dialog ref={dialogRef}>
      <Select onChange={onChange}>
        {themeOptions && themeOptions.map(option => {
          return (
            <Option key={option.value} data-value={option.value}>
              {option.title}
            </Option>
          )
        })}
      </Select>
    </Dialog>
  );
};

export default LanguageSwitchDialog;
