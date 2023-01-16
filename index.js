/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';

// Routes
import App from './src/routes';
import AuthProvider from './src/context/authContext';
import { store } from './src/redux/store';

import {name as appName} from './app.json';

const AppGlobal = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppGlobal);
