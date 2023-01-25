import React, {useContext, useState} from 'react';

// Components
import SimpleContainer from '../../../components/containers/simple';
import BrandForm from '../../../components/forms/brands';
import {AuthContext} from '../../../context/authContext';

function CreateBrandScreen({brandActions: {createBrand, updateBrand}, ...props}) {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState(false);
  const {userInfo} = useContext(AuthContext);

  const handleSubmit = formData => {
    const userParsed = JSON.parse(userInfo);

    if (props?.route?.params !== undefined) {
      updateBrand(formData, (type, response) => {
          if (type === 'success') {
            setVisible(true);
            setMessage('Marca actualizada correctamente!');
          }
        },
      );
    } else {
      createBrand(
        {store_id: userParsed[0].store_id, ...formData},
        (type, response) => {
          if (type === 'success') {
            setVisible(true);
            setMessage('Marca creada correctamente!');
          }
        },
      );
    }
  };

  const handleCloseSnack = () => {
    setVisible(false);
    props.navigation.navigate('Brands');
  };

  return (
    <SimpleContainer
      visible={visible}
      handleCloseSnack={handleCloseSnack}
      message={message}
      setMessage={setMessage}>
      <BrandForm onSubmit={handleSubmit} defaultValues={props.route.params} />
    </SimpleContainer>
  );
}

export default CreateBrandScreen;
