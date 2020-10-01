import { Field } from 'formik';
import React from 'react';

// styling
import { spacing } from '@ui5/webcomponents-react-base';

// components
import { InputType } from '@ui5/webcomponents-react';
import Input from '../FormComponents/Input';
import TextArea from '../FormComponents/TextArea';
import Switch from '../FormComponents/Switch';

export default function TodoFormDescriptionSection() {
  return (
    <>
      <Field labelText="Title" disabled={false} name="title" placeholder="Title goes here" type={InputType.Text} component={Input} style={{ width: '100%', ...spacing.sapUiSmallMarginBottom }} />
      <Field labelText="Description" name="description" placeholder="Add your description here" rows={10} component={TextArea} />
      <Field labelText="Active" name="active" component={Switch} graphical={true} />
    </>
  );
}
