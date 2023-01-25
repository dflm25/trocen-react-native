import React, {useEffect, useState, useContext} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import Layout from '../../components/layout';
import FlatListHeader from '../../components/flatListHeader';
import {AuthContext} from '../../context/authContext';
import styles from './styles';

function BrandScreen({brandActions: {getPagination}, ...props}) {
  const isFocused = useIsFocused();
  const {userInfo} = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const userParsed = JSON.parse(userInfo);
    getPagination(
      {page, store_id: userParsed[0].store_id},
      (type, response) => {
        if (type === 'success') {
          setBrands(response.data);
        }
      },
    );
  }, [isFocused]);

  return (
    <Layout {...props}>
      <FlatListHeader {...props} />
      <FlatList
        data={brands}
        renderItem={({item}) => (
          <View style={styles.cardItem}>
            <Card.Title
              title={item.name}
              right={props => (
                <Menu>
                  <MenuTrigger>
                    <Icon name="ellipsis-v" size={20} style={styles.icon} />
                  </MenuTrigger>
                  <MenuOptions>
                    <MenuOption
                      customStyles={styles.itemMenu}
                      onSelect={() => alert(`Save`)}
                      text="Editar"
                    />
                    <MenuOption
                      customStyles={styles.itemMenu}
                      onSelect={() => alert(`Not called`)}
                      text="Eliminar"
                    />
                  </MenuOptions>
                </Menu>
              )}
            />
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </Layout>
  );
}

export default BrandScreen;
