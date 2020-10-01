import React from 'react';
import NavBack from '../NavBack/NavBack';
import { Formik, Form as FormikForm } from 'formik';
import { Button, FlexBox } from '@ui5/webcomponents-react';
import CenteredContent from '../Layout/CenteredContent';

function onSubmit(f, values, actions) {
  f(values, actions);
}

const Form = ({ initialValues, onSubmitHandler, actionButtonText, validationSchema, ...props }) => {
  return (
    <div>
      <NavBack />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values, actions) => onSubmit(onSubmitHandler, values, actions)}>
        {({ values, errors, isSubmitting, handleSubmit }) => (
          <>
            <FormikForm>
              {props.children}
              {/*<pre>{JSON.stringify(values, null, 2)}</pre>
                            <pre>{JSON.stringify(errors, null, 2)}</pre>*/}
            </FormikForm>
            <CenteredContent>
              <FlexBox
                style={{
                  marginTop: '20px',
                }}
                justifyContent="End"
              >
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

export default Form;
