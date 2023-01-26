import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text, Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

// styles
import styles from './styles';

export default function FlatListHeader({title, goTo, placeholder, ...props}) {
  return (
    <View>
      <View style={styles.adminHeader}>
        <Text style={styles.title} variant="titleMedium">
          {title}
        </Text>
        <Text style={styles.title} variant="titleMedium">
          <TouchableOpacity onPress={() => props.navigation.navigate(goTo)}>
            <Icon name="plus" size={18} style={styles.icon} />
          </TouchableOpacity>
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder={placeholder}
          onChangeText={() => {}}
          value={false}
        />
      </View>
    </View>
  );
}
