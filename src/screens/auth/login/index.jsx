import {useContext} from 'react';

// components
import BackgroundContainer from '../../../components/containers/background';
import LoginForm from '../../../components/forms/login';
import Logo from '../../../components/logo';

import {AuthContext} from '../../../context/authContext';

export default function LoginScreen(props) {
  const {login} = useContext(AuthContext);

  const handleSubmit = data => {
    login(data);
  };

  return (
    <BackgroundContainer>
      <Logo />
      <LoginForm {...props} onSubmit={handleSubmit} />
    </BackgroundContainer>
  );
}
