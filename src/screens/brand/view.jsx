import React, {useEffect, useState, useContext} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {Text, Card, Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import Layout from '../../components/layout';
import {AuthContext} from '../../context/authContext';
import styles from './styles';

function BrandScreen({ brandActions: { getPagination }, ...props}) {
  const {userInfo} = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const userParsed = JSON.parse(userInfo);
    getPagination({ page, storage_id: userParsed[0].store_id }, (type, response) => {
      if (type === 'success') {
        setLoading(false);
        setBrands(response);
      }
    });
  }, [])

  return (
    <Layout {...props}>
      <View style={styles.adminHeader}>
        <Text style={styles.title} variant="titleMedium">
          Marcas
        </Text>
        <Text style={styles.title} variant="titleMedium">
          <TouchableOpacity
            onPress={() => props.navigation.navigate('BrandForm')}>
            <Icon name="plus" size={18} style={styles.icon} />
          </TouchableOpacity>
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Buscar una marca"
          onChangeText={() => {}}
          value={[]}
        />
      </View>
      <FlatList
        data={brands}
        renderItem={({item}) => (
          <View style={styles.cardItem}>
            <Card.Title
              title={item.name}
              right={props => (
                <Icon name="ellipsis-v" size={20} style={styles.icon} />
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