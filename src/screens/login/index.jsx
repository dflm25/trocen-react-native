import React from 'react';
import {View, Text} from 'react-native';

// components
import BackgroundContainer from '../../components/containers/background';
import LoginForm from '../../components/forms/login';
import Logo from '../../components/logo';

import styles from './styles';

export default function LoginScreen(props) {
  return (
    <BackgroundContainer>
      <Logo />
      <LoginForm {...props} />
    </BackgroundContainer>
  );
}
