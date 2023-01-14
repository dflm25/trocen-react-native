// components
import BackgroundContainer from '../../../components/containers/background';
import RegisterForm from '../../../components/forms/register';
import Logo from '../../../components/logo';

export default function RegisterScreen(props) {
  const handleSubmit = data => {
    console.log('data', data);
  };

  return (
    <BackgroundContainer>
      <Logo />
      <RegisterForm {...props} onSubmit={handleSubmit} />
    </BackgroundContainer>
  );
}
