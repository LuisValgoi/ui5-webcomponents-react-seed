import React from 'react';

import { spacing } from '@ui5/webcomponents-react-base';
import { Label as UI5Label } from '@ui5/webcomponents-react';

const Label = ({ children, style }) => {
  const innerStyle = {
    ...style,
    ...spacing.sapUiTinyMarginBottom,
    lineHeight: '20px',
  };

  return (
    <UI5Label wrap style={innerStyle}>
      {children}
    </UI5Label>
  );
};

export default Label;
