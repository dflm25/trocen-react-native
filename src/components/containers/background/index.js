import React from 'react';
import {ImageBackground, KeyboardAvoidingView} from 'react-native';

// Styles
import styles from './styles';

export default function Background({children}) {
  return (
    <ImageBackground
      source={require('../../../assets/images/background_dot.png')}
      resizeMode="repeat"
      style={styles.background}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
