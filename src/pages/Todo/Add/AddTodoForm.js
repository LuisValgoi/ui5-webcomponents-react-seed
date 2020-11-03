import React from 'react';
import { Form, Formik } from 'formik';
import { Button, ButtonDesign, FlexBox, FlexBoxDirection, FlexBoxAlignItems } from '@ui5/webcomponents-react';
import { useQueryCache } from 'react-query';

import APIProvider from '../../../util/api/url/APIProvider';
import Constants from '../../../util/Constants';
import { usePost } from '../../../hooks/useRequest';

import TodoForm from '../Form/TodoForm';
import TodoFormValidationSchema from '../Form/TodoFormValidationSchema';
import FormData from '../Form/Data';

const styles = {
  flexBox: {
    width: '100%',
    margin: '10px 0',
  },
  buttons: {
    marginRight: '10px',
  },
  form: {
    margin: '0 15px',
  },
};

const AddTodoForm = ({ dialogClose }) => {
  const queryCache = useQueryCache();
  const [addTodo] = usePost({
    url: APIProvider.getUrl('CREATE_TODO'),
    mutationOptions: {
      onSuccess: () => {
        queryCache.invalidateQueries([Constants.REACT_QUERY.KEYS.RQ_GET_TODO_LIST]);
      },
    },
  });

  const onSubmitEditForm = async (values, actions) => {
    actions.setSubmitting(true);
    await addTodo({ ...values, isCompleted: values.completed });
    actions.setSubmitting(false);
    actions.resetForm(true);
    dialogClose();
  };

  return (
    <Formik enableReinitialize initialValues={FormData} validationSchema={TodoFormValidationSchema} onSubmit={onSubmitEditForm}>
      {({ isSubmitting, handleSubmit }) => (
        <Form style={styles.form}>
          <TodoForm />
          <FlexBox direction={FlexBoxDirection.RowReverse} alignItems={FlexBoxAlignItems.Center} style={styles.flexBox}>
            <Button type="submit" disabled={isSubmitting} design={ButtonDesign.Emphasized} icon="paper-plane" style={styles.buttons} onClick={handleSubmit}>
              Submit
            </Button>
            <Button style={styles.buttons} onClick={dialogClose}>
              Cancel
            </Button>
          </FlexBox>
        </Form>
      )}
    </Formik>
  );
};

export default AddTodoForm;
