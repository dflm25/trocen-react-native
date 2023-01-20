import {useState} from 'react';

// components
import BackgroundContainer from '../../../components/containers/background';
import RegisterForm from '../../../components/forms/register';
import Logo from '../../../components/logo';

export default function RegisterScreen({authRegister, ...props}) {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState(false);

  const handleSubmit = async data => {
    const response = await authRegister(data);

    if (response) {
      setMessage('Usuario registrado, inicia sesion');
      setVisible(true);
    }
  };

  const handleCloseSnack = () => {
    setVisible(false);
    props.navigation.push('StartScreen');
  };

  return (
    <BackgroundContainer
      visible={visible}
      handleCloseSnack={handleCloseSnack}
      message={message}
      setMessage={setMessage}>
      <Logo size={86} />
      <RegisterForm {...props} onSubmit={handleSubmit} />
    </BackgroundContainer>
  );
}
