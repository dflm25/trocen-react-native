import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../assets/theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  ...theme,
  container: {
    width: width - 40,
    marginVertical: 4,
  },
  input: {
    backgroundColor: theme.colors.surface,
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
});

export default styles;
