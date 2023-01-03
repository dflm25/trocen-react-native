import React from 'react';
import {Button as PaperButton} from 'react-native-paper';

import styles from './styles';

export default function Button({mode, style, ...props}) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && {backgroundColor: styles.colors.surface},
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  );
}
