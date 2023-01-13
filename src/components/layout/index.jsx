import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// styles
import styles from './styles';

export default function Layout({ children, navigation }) {
  return (
    <View style={{justifyContent: 'center'}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.openDrawer()}>
            <Icon name="bars" size={22} color={styles.colors.white} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigation.navigate('Notifications')}>
            <Icon name="bell" size={22} color={styles.colors.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerWhite}>
        {children}
      </View>
    </View>
  )
}
