import React from 'react';
import NavBack from '../NavBack/NavBack';
import { Formik, Form as FormFormik } from 'formik';
import { Button, FlexBox } from '@ui5/webcomponents-react';
import CenteredContent from '../Layout/CenteredContent';

const onSubmit = (fn, values, actions) => {
  fn(values, actions);
};

const FormBase = ({ initialValuesData, onSubmitHandler, actionButtonText, validationSchema, ...props }) => {
  return (
    <div>
      <NavBack />
      <Formik enableReinitialize initialValues={initialValuesData} validationSchema={validationSchema} onSubmit={(values, actions) => onSubmit(onSubmitHandler, values, actions)}>
        {({ isSubmitting, handleSubmit }) => (
          <>
            <FormFormik>{props.children}</FormFormik>
            <CenteredContent>
              <FlexBox>
                <Button disabled={isSubmitting} onClick={handleSubmit} design="Emphasized" style={{ width: '100px' }}>
                  {actionButtonText}
                </Button>
              </FlexBox>
            </CenteredContent>
          </>
        )}
      </Formik>
    </div>
  );
};

export default FormBase;
