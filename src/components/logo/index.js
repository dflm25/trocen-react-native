import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';

// styles
import styles from './styles';

export default function Logo({size}) {
  return (
    <Image
      style={{...styles.logo, width: size, height: size}}
      source={require('../../assets/images/logo.png')}
    />
  );
}

Logo.propTypes = {
  size: PropTypes.number,
};

Logo.defaultProps = {
  size: 140,
};
