import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Divider} from 'react-native-paper';

import Button from '../../button';
import TextInput from '../../textInput';
import schema from './schema';

function LoginForm({navigation, onSubmit}) {
  const {
    handleSubmit,
    formState: {errors},
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: 'Daniel Lucumi',
      username: 'dlucumi',
      email: 'dflm25@gmail.com',
      password: '12345678',
      phone: '3015598509',
      store_name: 'Container shopping',
    },
  });

  return (
    <>
      <TextInput
        label="Nombre"
        name="name"
        returnKeyType="next"
        error={errors}
        control={control}
        icon={'email'}
      />
      <TextInput
        label="Nickname"
        name="username"
        returnKeyType="next"
        error={errors}
        control={control}
        icon={'email'}
      />
      <TextInput
        label="Email"
        name="email"
        returnKeyType="next"
        error={errors}
        autoCapitalize="none"
        control={control}
      />
      <TextInput
        label="Telefono"
        name="phone"
        returnKeyType="next"
        error={errors}
        autoCapitalize="none"
        control={control}
      />
      <TextInput
        label="Password"
        name="password"
        returnKeyType="done"
        error={errors}
        secureTextEntry
        control={control}
      />

      <Divider />

      <TextInput
        label="Nombre de tu negocio"
        name="store_name"
        returnKeyType="next"
        error={errors}
        control={control}
      />

      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Registrarme
      </Button>
    </>
  );
}

export default LoginForm;
