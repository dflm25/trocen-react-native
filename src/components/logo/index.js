import React from 'react';
import {Image} from 'react-native';

// styles
import styles from './styles';

export default function Logo({navigation}) {
  return (
    <Image
      style={styles.logo}
      source={require('../../assets/images/logo.png')}
    />
  );
}
