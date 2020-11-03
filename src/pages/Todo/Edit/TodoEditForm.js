import React from 'react';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { Button, ButtonDesign, FlexBox, FlexBoxAlignItems, FlexBoxDirection } from '@ui5/webcomponents-react';

import NavBack, { NavBackIcon } from '../../../components/NavBack/NavBack';
import APIProvider from '../../../util/api/url/APIProvider';
import BrowserProvider from '../../../util/browser/BrowserProvider';
import { usePut } from '../../../hooks/useRequest';

import TodoForm from '../Form/TodoForm';
import TodoFormValidationSchema from '../Form/TodoFormValidationSchema';

const style = {
  putWrapperUp: {
    marginTop: '-50px',
  },
};

export default function TodoEditForm({ data }) {
  const history = useHistory();
  const [editTodo] = usePut({
    url: APIProvider.getUrl('UPDATE_TODO', [{ value: data.id }]),
  });

  const onSubmitEditForm = async (values, actions) => {
    actions.setSubmitting(true);
    await editTodo({ ...values, isCompleted: values.completed });
    actions.setSubmitting(false);
    actions.resetForm(true);
    history.push(BrowserProvider.getUrl('TODO_LIST'));
  };

  return (
    <div style={style.putWrapperUp}>
      <h1>Todo Edit Form</h1>
      <Formik enableReinitialize initialValues={data} validationSchema={TodoFormValidationSchema} onSubmit={onSubmitEditForm}>
        {({ isSubmitting, handleSubmit }) => (
          <Form>
            <TodoForm />
            <FlexBox direction={FlexBoxDirection.RowReverse} alignItems={FlexBoxAlignItems.Center}>
              <Button type="submit" disabled={isSubmitting} onClick={handleSubmit} design={ButtonDesign.Emphasized} icon="paper-plane">
                Submit
              </Button>
              <NavBack text="Cancel" icon={NavBackIcon.NONE} />
            </FlexBox>
          </Form>
        )}
      </Formik>
    </div>
  );
}
