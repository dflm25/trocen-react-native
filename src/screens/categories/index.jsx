import * as React from 'react';
import {View, FlatList} from 'react-native';
import {Text, Card, Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import Layout from '../../components/layout';
import styles from './styles';

function CategoriesScreen(props) {
  return (
    <Layout {...props}>
      <View style={styles.adminHeader}>
        <Text style={styles.title} variant="titleMedium">
          Categorias
        </Text>
        <Text style={styles.title} variant="titleMedium">
          <Icon name="plus" size={18} style={styles.icon} />
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Buscar categoria"
          onChangeText={() => {}}
          value={[]}
        />
      </View>
      <FlatList
        data={[{}, {}, {}, {}]}
        renderItem={({item}) => (
          <View style={styles.cardItem}>
            <Card.Title
              title="Vans classic"
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
