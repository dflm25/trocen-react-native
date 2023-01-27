import {View, Text} from 'react-native';
import {Controller} from 'react-hook-form';
import RNTextArea from "@freakycoder/react-native-text-area";

import styles from './styles';

export default function TextInput({control, name, error}) {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, value}}) => (
            <RNTextArea
                style={styles.input}
                maxCharLimit={100}
                placeholderTextColor="black"
                exceedCharCountColor="#990606"
                placeholder="Descripcion del producto..."
                onChangeText={(text) => onChange(text)}
            />
        )}
      />

      {error && error[name] && (
        <Text style={styles.error}>{error[name].message}</Text>
      )}
    </View>
  );
}
