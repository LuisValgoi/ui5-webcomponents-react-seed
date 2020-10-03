import React from 'react';

import { Field, Form, Formik } from 'formik';
import { Button, ButtonDesign, FlexBox, FlexBoxAlignItems, FlexBoxDirection, InputType } from '@ui5/webcomponents-react';
import Input from '../../../components/Form/Input/Input';
import Switch from '../../../components/Form/Switch/Switch';
import TextArea from '../../../components/Form/TextArea/TextArea';
import Select from '../../../components/Form/Select/Select';
import TodoEditFormValidationSchema from './TodoEditFormValidationSchema';
import NavBack, { NavBackIcon } from '../../../components/NavBack/NavBack';

const style = {
  putWrapperUp: {
    marginTop: '-50px',
  },
};

const typeOptions = [
  { id: 'WORK', text: 'Work' },
  { id: 'PERSONAL', text: 'Personal' },
  { id: 'SCHOOL', text: 'School' },
];

const priorityOptions = [
  { id: 'LOW', text: 'Low' },
  { id: 'MEDIUM', text: 'Medium' },
  { id: 'HIGH', text: 'High' },
];

export default function TodoEditForm({ data, onSubmit }) {
  return (
    <div style={style.putWrapperUp}>
      <h1>Todo Edit Form</h1>
      <Formik enableReinitialize validationSchema={TodoEditFormValidationSchema} onSubmit={onSubmit} initialValues={data}>
        {(values, errors, isSubmitting, handleSubmit) => (
          <Form>
            <div className="todo-edit-form-section-01">
              <h3>Section 01</h3>
              <Field labelText="Name" name="name" placeholder="Name goes here" type={InputType.Text} component={Input} />
              <Field labelText="Description" name="description" placeholder="Add your description here" rows={5} component={TextArea} />
              <Field labelText="Completed" name="completed" component={Switch} graphical={true} />
            </div>
            <div className="todo-edit-form-section-02">
              <h3>Section 02</h3>
              <Field labelText="Priority" name="priority" component={Select} options={priorityOptions}></Field>
              <Field labelText="Type" name="type" component={Select} options={typeOptions}></Field>
            </div>
            <div className="todo-edit-form-footer">
              <FlexBox direction={FlexBoxDirection.RowReverse} alignItems={FlexBoxAlignItems.Center}>
                <Button design={ButtonDesign.Emphasized} disabled={isSubmitting} onClick={handleSubmit} type="submit" icon="paper-plane">
                  Submit
                </Button>
                <NavBack text="Cancel" icon={NavBackIcon.NONE} />
              </FlexBox>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
