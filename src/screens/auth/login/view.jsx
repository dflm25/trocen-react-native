import {useContext, useState} from 'react';

// components
import BackgroundContainer from '../../../components/containers/background';
import LoginForm from '../../../components/forms/login';
import Logo from '../../../components/logo';

import {AuthContext} from '../../../context/authContext';
import {restartApp} from '../../../utilities/helper';

export default function LoginScreen({authActions: {authLogin}, ...props}) {
  const [loading, setLoading] = useState(false);
  // const {login} = useContext(AuthContext);

  const handleSubmit = async data => {
    setLoading(true);
    authLogin(data, (type, response) => {
      if (type === 'success') {
        setLoading(false);
        setTimeout(() => restartApp(), 200);
      }
    });
  };

  return (
    <BackgroundContainer>
      <Logo />
      <LoginForm {...props} onSubmit={handleSubmit} />
    </BackgroundContainer>
  );
}
