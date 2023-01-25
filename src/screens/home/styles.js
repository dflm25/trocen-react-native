import {StyleSheet} from 'react-native';
import {theme} from '../../assets/theme';

const styles = StyleSheet.create({
  ...theme,
  cardItem: {
    marginBottom: 8,
    backgroundColor: theme.colors.white,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  title: {
    marginVertical: 10,
  },
});

export default styles;
