import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {Text, Card, Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

// Services
import {getAllBrands} from '../../services/brand';

import Layout from '../../components/layout';
import styles from './styles';

const getPaginate = async (setBrands, page) => {
  const response = getAllBrands({page});
};

function CategoriesScreen(props) {
  const [page, setPage] = useState(1);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    getPaginate(setBrands, page);
  }, [page]);

  return (
    <Layout {...props}>
      <View style={styles.adminHeader}>
        <Text style={styles.title} variant="titleMedium">
          Marcas
        </Text>
        <Text style={styles.title} variant="titleMedium">
          <Icon name="plus" size={18} style={styles.icon} />
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

export default CategoriesScreen;
