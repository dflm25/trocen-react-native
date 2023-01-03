import React from 'react';
import {Text, Image} from 'react-native';

// components
import BackgroundContainer from '../../components/containers/background';
import Button from '../../components/button';
import Logo from '../../components/logo';

// styles
import styles from './styles';

export default function StartScreen({navigation}) {
  return (
    <BackgroundContainer>
      <Logo />
      <Text style={styles.paragraph}>
        Registrate gratis y administra tu inventario
      </Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}>
        Ingresar
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}>
        Registrarme
      </Button>
    </BackgroundContainer>
  );
}
