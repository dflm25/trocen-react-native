/**
 * @format
 */

import {AppRegistry} from 'react-native';

// Routes
import App from './src/routes';
import AuthProvider from './src/context/authContext';

import {name as appName} from './app.json';

const AppGlobal = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppGlobal);
