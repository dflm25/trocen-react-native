import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Nombre es requerido'),
});

export default schema;
