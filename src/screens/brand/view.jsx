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

function BrandScreen({brandActions: {getPagination, removeBrand}, ...props}) {
  const isFocused = useIsFocused();
  const {userInfo} = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const [brands, setBrands] = useState([]);
  const [visibleDialog, setVisibleDialog] = useState(false);
  const [currentId, setCurrentId] = useState(false);

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
  }, [isFocused, currentId]);

  const handleDelete = () => {
    removeBrand({ id: currentId }, (type, response) => {
      if (type === 'success') {
        setVisibleDialog(false);
        setCurrentId(false);
      }
    })
  }

  const handleDeleteSelected = (id) => {
    setVisibleDialog(true);
    setCurrentId(id);
  }

  return (
    <Layout 
      {...props} visibleDialog={visibleDialog}
      message="Estas seguro de eliminar la marca?"
      actions={{ handleDelete, setVisibleDialog }}
    >
      <FlatListHeader {...props} />
      <FlatList
        data={brands}
        renderItem={({item}) => (
          <View style={styles.cardItem}>
            <Card.Title
              title={item.name}
              right={menuProps => (
                <Menu>
                  <MenuTrigger>
                    <Icon name="ellipsis-v" size={20} style={styles.icon} />
                  </MenuTrigger>
                  <MenuOptions>
                    <MenuOption
                      customStyles={styles.itemMenu}
                      onSelect={() => props.navigation.navigate('BrandForm', item)}
                      text="Editar"
                    />
                    <MenuOption
                      customStyles={styles.itemMenu}
                      onSelect={() => handleDeleteSelected(item.id)}
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
