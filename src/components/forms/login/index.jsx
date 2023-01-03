import {View, TouchableOpacity, Text} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import Button from '../../button';
import TextInput from '../../textInput';

import styles from './styles';

function LoginForm({navigation}) {
  return (
    <>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={'email.value'}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={'!!email.error'}
        errorText={''}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={'password.value'}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={'!!password.error'}
        errorText={''}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={() => {}}>
        Login
      </Button>
    </>
  );
}

export default LoginForm;
