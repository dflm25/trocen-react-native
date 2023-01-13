import {createNativeStackNavigator} from '@react-navigation/native-stack';

import StartScreen from '../../screens/start';
import LoginScreen from '../../screens/login';
import RegisterScreen from '../../screens/register';
import ForgotPasswordScreen from '../../screens/forgotPassword';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StartScreen"
        component={StartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{title: 'Ingresar'}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{title: 'Registro'}}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{title: 'Recuperar contraseña'}}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
