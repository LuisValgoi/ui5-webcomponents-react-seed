import React from 'react';
import { Input as UI5Input, ValueState, FlexBox, FlexBoxDirection } from '@ui5/webcomponents-react';

// styling
import { spacing } from '@ui5/webcomponents-react-base';
import Label from './Label';

const Input = ({ field, form: { touched, errors }, labelText, style, ...props }) => {
  const errorMsg = touched[field.name] && errors[field.name];
  const errorState = errorMsg ? ValueState.Error : ValueState.None;
  return (
    <FlexBox direction={FlexBoxDirection.Column}>
      {labelText && <Label>{labelText}</Label>}
      <UI5Input valueState={errorState} valueStateMessage={<span>{errorMsg}</span>} style={style ? style : spacing.sapUiSmallMarginBottom} {...props} {...field} />
    </FlexBox>
  );
};

export default Input;
