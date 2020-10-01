import React from 'react';

// components
import Form from '../../../components/Form/Form';
import CenteredContent from '../../../components/Layout/CenteredContent';
import TodoFormDescriptionSection from './FormSections/TodoFormDescriptionSection';
import TodoFormSelectSection from './FormSections/TodoFormSelectSection';
import TodoValidationSchema from './TodoValidationSchema';

export default class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: {
        title: '',
        description: '',
        active: true,
        type: 'Personal',
        priority: 'Medium',
      },
    };
  }

  async mySubmitHandler(values, actions) {
    actions.setSubmitting(true);
    // here you should call your PUT/POST API
    // setSubmitting(true) is called before the API request and (false) should be called after
    alert(JSON.stringify(values, null, 2));
    actions.resetForm(true);
    actions.setSubmitting(false);
  }

  render() {
    return (
      <Form actionButtonText="Submit" validationSchema={TodoValidationSchema} initialValues={this.state.todo} onSubmitHandler={this.mySubmitHandler}>
        <CenteredContent>
          <TodoFormDescriptionSection />
          <TodoFormSelectSection />
        </CenteredContent>
      </Form>
    );
  }
}
