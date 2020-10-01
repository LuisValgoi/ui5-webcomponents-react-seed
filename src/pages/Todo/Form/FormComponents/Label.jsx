import React from 'react';

// styling
import { spacing } from '@ui5/webcomponents-react-base';
import './Label.css';

// components
import { Label as UI5Label } from '@ui5/webcomponents-react';

const Label = ({ children, style }) => {
  return (
    <UI5Label wrap style={style ? style : { ...spacing.sapUiTinyMarginBottom }} className="line-height">
      {children}
    </UI5Label>
  );
};

export default Label;
