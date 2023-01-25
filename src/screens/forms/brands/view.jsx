import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native';

// Components
import BrandForm from '../../../components/forms/brands';
import {AuthContext} from '../../../context/authContext';

// styles
import styles from './styles';

function CreateBrandScreen({ brandActions : { createBrand } }) {
  const {userInfo} = useContext(AuthContext);

  const handleSubmit = (formData) => {
    const userParsed = JSON.parse(userInfo);
    
    createBrand({ storage_id: userParsed[0].store_id, ...formData }, (type, response) => {
        if (type === 'success') {
            setLoading(false);
        }
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <BrandForm onSubmit={handleSubmit} />
    </SafeAreaView>
  );
}

export default CreateBrandScreen;
