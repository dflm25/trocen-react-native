import React, {useContext} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Avatar, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import {AuthContext} from '../../context/authContext';

// theme
import styles from './styles';
import HeaderImage from '../../assets/images/header.jpg';
import avatarUser from '../../assets/images/avatar.png';

export default function CustomDrawer(props) {
  const {logOut} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.scrollView}>
        <ImageBackground source={HeaderImage} style={styles.headerImage}>
          <Avatar.Image size={62} source={avatarUser} />
          <Text style={styles.name}>Daniel Lucumi</Text>
          <View style={styles.storeContainer}>
            <Text style={styles.store}>Container shopping</Text>
            <Icon name="shopping-bag" size={14} style={styles.icon} />
          </View>
        </ImageBackground>
        <DrawerItemList inactiveTintColor="rgba(0, 0, 0, .87)" {...props} />
      </DrawerContentScrollView>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={() => logOut()}>
          <Icon name="sign-out" size={14} />
          <Text variant="bodyMedium" style={styles.signout}>
            Salir
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
