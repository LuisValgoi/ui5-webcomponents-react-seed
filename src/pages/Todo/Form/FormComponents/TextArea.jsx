import React from 'react';

// styling
import { spacing } from '@ui5/webcomponents-react-base';

//components
import { TextArea as UI5TextArea, ValueState, FlexBox, FlexBoxDirection } from '@ui5/webcomponents-react';
import Label from './Label';

const TextArea = ({ field, form: { touched, errors }, labelText, rows, ...props }) => {
  const errorMsg = touched[field.name] && errors[field.name];
  const errorState = errorMsg ? ValueState.Error : ValueState.None;
  return (
    <FlexBox direction={FlexBoxDirection.Column}>
      <Label>{labelText}</Label>
      <UI5TextArea valueState={errorState} valueStateMessage={<span>{errorMsg}</span>} style={spacing.sapUiSmallMarginBottom} rows={rows} {...props} {...field} />
    </FlexBox>
  );
};

export default TextArea;
