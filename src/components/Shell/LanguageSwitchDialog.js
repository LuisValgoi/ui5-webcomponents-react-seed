import React from 'react';

import { ComboBoxItem } from '@ui5/webcomponents-react/lib/ComboBoxItem';
import { ComboBox } from '@ui5/webcomponents-react/lib/ComboBox';
import { Dialog } from '@ui5/webcomponents-react/lib/Dialog';

const LanguageSwitchDialog = ({dialogRef}) => {

  const switchTheme = () => {
    dialogRef.current.open()
  };

  return (
    <Dialog ref={dialogRef}>
        <ComboBox>
            <ComboBoxItem text="ComboBox Entry 1" />
            <ComboBoxItem text="ComboBox Entry 2" />
            <ComboBoxItem text="ComboBox Entry 3" />
            <ComboBoxItem text="ComboBox Entry 4" />
            <ComboBoxItem text="ComboBox Entry 5" />
        </ComboBox>
    </Dialog>
  );
};

export default LanguageSwitchDialog;
