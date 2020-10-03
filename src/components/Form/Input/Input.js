import React from 'react';

import { spacing } from '@ui5/webcomponents-react-base';
import { Input as UI5Input, ValueState } from '@ui5/webcomponents-react';
import FieldBase from '../FieldBase/FieldBase';

const Input = ({ field, form: { touched, errors }, labelText, style, ...props }) => {
  const errorMsg = touched[field.name] && errors[field.name];
  const errorState = errorMsg ? ValueState.Error : ValueState.None;

  return (
    <FieldBase labelText={labelText}>
      <UI5Input valueState={errorState} valueStateMessage={<span>{errorMsg}</span>} style={style ? style : spacing.sapUiSmallMarginBottom} {...props} {...field} />
    </FieldBase>
  );
};

export default Input;
