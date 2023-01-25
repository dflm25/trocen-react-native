import React from 'react';
import {View, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

// styles
import styles from './styles';

export default function Layout({children, navigation}) {
  return (
    <SafeAreaView style={{justifyContent: 'center'}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.openDrawer()}>
          <Icon name="bars" size={22} color={styles.colors.white} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Icon name="notification" size={22} color={styles.colors.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerWhite}>{children}</View>
    </SafeAreaView>
  );
}
