import React from 'react';

// components
import { Switch as UI5Switch, FlexBox, FlexBoxDirection, Label } from '@ui5/webcomponents-react';

const Switch = ({ field, form: { values, setFieldValue }, labelText, ...props }) => {
  const value = values[field.name];
  return (
    <FlexBox direction={FlexBoxDirection.Column}>
      <Label>{labelText}</Label>
      <UI5Switch checked={value} onChange={() => setFieldValue(field.name, !value)} style={{ width: 'min-content' }} {...props} />
    </FlexBox>
  );
};

export default Switch;
