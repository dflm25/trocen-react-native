import {View, TouchableOpacity, Text} from 'react-native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import Button from '../../button';
import TextInput from '../../textInput';
import schema from './schema';

import styles from './styles';

function LoginForm({navigation, onSubmit}) {
  const {
    handleSubmit,
    formState: {errors},
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {email: 'dflm25@gmail.com', password: '12345678'},
  });

  return (
    <>
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
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Ingresar
      </Button>
    </>
  );
}

export default LoginForm;
