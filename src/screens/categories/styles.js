import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../assets/theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  ...theme,
  searchContainer: {
    marginVertical: 10,
  },
  cardItem: {
    marginBottom: 8,
    backgroundColor: theme.colors.white,
    paddingVertical: 5,
    paddingHorizontal: 2,
    borderRadius: 10,
  },
  title: {
    marginVertical: 10,
  },
  icon: {
    marginRight: 20,
  },
});

export default styles;
