import React from 'react';
import {SafeAreaView, KeyboardAvoidingView} from 'react-native';
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
    <SafeAreaView style={styles.background}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
      <Snackbar
        duration={3000}
        visible={visible}
        onDismiss={handleCloseSnack}
        action={{
          label: 'cerrar',
          onPress: handleCloseSnack,
        }}>
        {message}
      </Snackbar>
    </SafeAreaView>
  );
}
