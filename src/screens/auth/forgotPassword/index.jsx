import React from 'react';

// components
import BackgroundContainer from '../../components/containers/background';
import PasswordForm from '../../components/forms/password';
import Logo from '../../components/logo';

export default function LoginScreen(props) {
  return (
    <BackgroundContainer>
      <Logo />
      <PasswordForm {...props} />
    </BackgroundContainer>
  );
}
