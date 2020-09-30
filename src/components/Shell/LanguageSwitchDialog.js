import React from 'react';

import { Option  } from '@ui5/webcomponents-react/lib/Option';
import { Select } from '@ui5/webcomponents-react/lib/Select';
import { Dialog } from '@ui5/webcomponents-react/lib/Dialog';
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";

const LanguageSwitchDialog = ({dialogRef}) => {
  const onChange = (event) => {
    setTheme(event.detail.selectedOption.dataset.value);
  };
  const themeOptions = [
    { value: 'sap_fiori_3', title: 'Default' },
    { value: 'sap_belize_hcb', title: 'High Contrast Black' },    
    { value: 'sap_belize_hcw', title: 'High Contrast White' },
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
