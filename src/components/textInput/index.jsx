import {View, Text} from 'react-native';
import {TextInput as Input} from 'react-native-paper';
import {Controller} from 'react-hook-form';

import styles from './styles';

export default function TextInput({control, name, error, ...props}) {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, value}}) => (
          <Input
            style={styles.input}
            selectionColor={styles.colors.primary}
            underlineColor="transparent"
            mode="outlined"
            onChangeText={onChange}
            value={value}
            {...props}
          />
        )}
      />

      {error && error[name] && (
        <Text style={styles.error}>{error[name].message}</Text>
      )}
    </View>
  );
}
