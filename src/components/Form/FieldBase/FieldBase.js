import React from 'react';

import { FlexBox, FlexBoxDirection } from '@ui5/webcomponents-react';
import Label from '../Label/Label';

const FieldBase = ({ children, labelText }) => {
  return (
    <FlexBox direction={FlexBoxDirection.Column}>
      {labelText && <Label>{labelText}</Label>}
      {children}
    </FlexBox>
  );
};

export default FieldBase;
