import {View, TouchableOpacity, Text} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import Button from '../../button';
import TextInput from '../../textInput';

import styles from './styles';

function PasswordForm({navigation}) {
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

      <Button mode="contained" onPress={() => {}}>
        Enviame
      </Button>
    </>
  );
}

export default PasswordForm;
