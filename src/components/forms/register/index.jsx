import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

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
        label="Email"
        name="email"
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
      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Registrarme
      </Button>
    </>
  );
}

export default LoginForm;
