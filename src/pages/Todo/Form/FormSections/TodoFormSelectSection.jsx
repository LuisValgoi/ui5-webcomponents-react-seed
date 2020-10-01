import React from 'react';
import { Field } from 'formik';

// styling
import { spacing } from '@ui5/webcomponents-react-base';

// components
import Select from '../FormComponents/Select';

export default function TodoFormSelectSection() {
  const typeOptions = [
    { id: 'Work', text: 'Work' },
    { id: 'Personal', text: 'Personal' },
    { id: 'School', text: 'School' },
  ];

  const priorityOptions = [
    { id: 'Low', text: 'Low' },
    { id: 'Medium', text: 'Medium' },
    { id: 'High', text: 'High' },
  ];

  return (
    <>
      <Field labelText="Priority" name="priority" component={Select} style={spacing.sapUiSmallMarginBottom} options={priorityOptions}></Field>
      <Field labelText="Type" name="type" component={Select} style={spacing.sapUiSmallMarginBottom} options={typeOptions}></Field>
    </>
  );
}
