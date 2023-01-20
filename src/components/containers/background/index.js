import React from 'react';
import {ImageBackground, KeyboardAvoidingView} from 'react-native';
import {Snackbar} from 'react-native-paper';

// Styles
import styles from './styles';

export default function Background({
  children,
  handleCloseSnack,
  visible,
  message,
}) {
  return (
    <ImageBackground
      source={require('../../../assets/images/background_dot.png')}
      resizeMode="repeat"
      style={styles.background}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
      <Snackbar
        duration={5000}
        visible={visible}
        onDismiss={handleCloseSnack}
        action={{
          label: 'cerrar',
          onPress: handleCloseSnack,
        }}>
        {message}
      </Snackbar>
    </ImageBackground>
  );
}
