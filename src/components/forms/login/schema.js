import * as yup from 'yup';

const regex =
  /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{7,16}$/;

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Email es requerido')
    .email('Formato email invalido'),
  password: yup
    .string()
    .required('Password es requerido')
    .min(7, 'Mínimo 7 caracteres'),
  // .matches(regex, 'un Numero, una mayuscula y un caracter especial'),
});

export default schema;
