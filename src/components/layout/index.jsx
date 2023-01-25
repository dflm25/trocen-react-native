import React from 'react';
import {View, TouchableOpacity, SafeAreaView} from 'react-native';
import { Button, Dialog, Portal, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

// styles
import styles from './styles';

export default function Layout({children, navigation, actions, visibleDialog, message}) {

  const hideDialog = () => actions.setVisibleDialog(false);

  return (
    <SafeAreaView>
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

      <Dialog visible={visibleDialog} onDismiss={hideDialog}>
        <Dialog.Content>
          <Text variant="bodyMedium">{message}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancelar</Button>
          <Button onPress={() => actions.handleDelete()}>Aceptar</Button>
        </Dialog.Actions>
      </Dialog>
    </SafeAreaView>
  );
}
