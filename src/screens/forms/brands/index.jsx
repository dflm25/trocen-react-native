import React, {useEffect, useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {Text, Card, Searchbar} from 'react-native-paper';

// Components
import BrandForm from '../../../components/forms/brands';
import styles from './styles';

function CategoriesScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <BrandForm />
    </SafeAreaView>
  );
}

export default CategoriesScreen;
