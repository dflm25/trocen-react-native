import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-native-paper';

// screens
import StartScreen from '../screens/start';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import ForgotPasswordScreen from '../screens/forgotPassword';

// theme
import theme from '../../src/assets/theme';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
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
      </NavigationContainer>
    </Provider>
  );
}
