import * as yup from 'yup';

const TodoEditFormValidationSchema = yup.object({
  title: yup.string().required().max(10),
  description: yup.string().required(),
});

export default TodoEditFormValidationSchema;
