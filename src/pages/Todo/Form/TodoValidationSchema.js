import * as yup from 'yup';

const TodoValidationSchema = yup.object({
  title: yup.string().required().max(10),
  description: yup.string().required(),
});

export default TodoValidationSchema;
