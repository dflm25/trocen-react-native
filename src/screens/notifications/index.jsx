import * as React from 'react';
import {View} from 'react-native';
import {Text, Avatar, Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import Layout from '../../components/layout';
import Product1 from '../../assets/images/product1.webp';
import Product2 from '../../assets/images/product2.webp';
import styles from './styles';

function HomeScreen(props) {
  return (
    <Layout {...props}>
      <Text style={styles.title} variant="titleMedium">
        Pedidos
      </Text>
      <View style={styles.cardItem}>
        <Card.Title
          title="Vans classic"
          subtitle="Carlos Aponte"
          left={props => (
            <Avatar.Image size={42} {...props} source={Product1} />
          )}
          right={props => <Icon name="chevron-right" size={20} />}
        />
      </View>
      <View style={styles.cardItem}>
        <Card.Title
          title="Vans classic"
          subtitle="Carlos Aponte"
          left={props => (
            <Avatar.Image size={42} {...props} source={Product2} />
          )}
          right={props => <Icon name="chevron-right" size={20} />}
        />
      </View>
    </Layout>
  );
}

export default HomeScreen;
