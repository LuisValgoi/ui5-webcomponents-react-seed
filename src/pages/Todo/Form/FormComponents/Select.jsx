import React from 'react';

// components
import { Select as UI5Select, FlexBox, FlexBoxDirection, Option } from '@ui5/webcomponents-react';

// styling
import { spacing } from '@ui5/webcomponents-react-base';
import Label from './Label';

const Select = ({ field, options, labelText, form: { setFieldValue }, style, ...props }) => {
  return (
    <FlexBox direction={FlexBoxDirection.Column}>
      <Label>{labelText}</Label>
      <UI5Select style={style ? style : spacing.sapUiSmallMarginBottom} onChange={(event) => setFieldValue(field.name, event.detail.selectedOption.dataset.id)} {...props}>
        {options.map((item) => (
          <Option key={item.id} data-id={item.id} selected={item.id === field.value}>
            {item.text}
          </Option>
        ))}
      </UI5Select>
    </FlexBox>
  );
};

export default Select;
