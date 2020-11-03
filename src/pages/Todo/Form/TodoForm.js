import React from 'react';
import { Field } from 'formik';
import { InputType } from '@ui5/webcomponents-react';

import Input from '../../../components/Form/Input/Input';
import Switch from '../../../components/Form/Switch/Switch';
import TextArea from '../../../components/Form/TextArea/TextArea';
import Select from '../../../components/Form/Select/Select';

import TypeOptions from './TypeOptions';
import PriorityOptions from './PriorityOptions';

const TodoForm = () => (
  <>
    <div>
      <h3>Basic Info</h3>
      <Field labelText="Name" name="name" required placeholder="Name goes here" type={InputType.Text} component={Input} />
      <Field labelText="Description" name="description" required placeholder="Add your description here" rows={5} component={TextArea} />
      <Field labelText="Completed" name="completed" required component={Switch} graphical={true} />
    </div>
    <div>
      <h3>Custom Info</h3>
      <Field labelText="Priority" name="priority" required component={Select} options={PriorityOptions} />
      <Field labelText="Type" name="type" required component={Select} options={TypeOptions} />
    </div>
  </>
);

export default TodoForm;
