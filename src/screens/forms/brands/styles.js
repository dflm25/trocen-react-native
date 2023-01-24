import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../../assets/theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  ...theme,
  searchContainer: {
    marginVertical: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});

export default styles;
