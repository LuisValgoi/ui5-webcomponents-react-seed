import React from 'react';
import { Formik } from 'formik';

import TodoEditFormValidationSchema from './TodoEditFormValidationSchema';

const style = {
  putWrapperUp: {
    marginTop: '-44px',
  },
};

export default function TodoEditForm({ data, onSubmit, children }) {
  return (
    <div style={style.putWrapperUp}>
      <h1>Todo Edit Form</h1>
      <Formik enableReinitialize validationSchema={TodoEditFormValidationSchema} onSubmit={onSubmit} initialValues={data}>
        {() => children}
      </Formik>
    </div>
  );
}
