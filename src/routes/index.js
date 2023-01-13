import React, {useContext} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, ActivityIndicator, MD2Colors} from 'react-native-paper';
import 'react-native-gesture-handler';

// screens
import AuthStack from './authStack';
import DrawerStack from './drawerStack';

// Context
import {AuthContext} from '../context/authContext';

// theme
import styles from './styles';
import theme from '../../src/assets/theme';

export default function App() {
  const {isLoading, userToken} = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={MD2Colors.purple800} />
      </View>
    );
  }

  return (
    <Provider theme={theme}>
      <NavigationContainer>
        {!userToken ? <AuthStack /> : <DrawerStack />}
      </NavigationContainer>
    </Provider>
  );
}
