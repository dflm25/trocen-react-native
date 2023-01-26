import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../../assets/theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  ...theme,
  forgotPassword: {
    marginVertical: 10,
  },
  dropdown: {
    width: width - 40,
    borderRadius: 2,
  },
  dropdownStyle: {
    borderColor: theme.colors.outline,
    borderRadius: 5,
    marginTop: 5,
    backgroundColor: theme.colors.surface,
  },
});

export default styles;
