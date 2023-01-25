import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../assets/theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  ...theme,
  searchContainer: {
    marginVertical: 10,
  },
  title: {
    marginVertical: 10,
  },
  icon: {
    marginRight: 20,
  },
  headerStyle: {
    flex: 1,
    height: 40,
    width: '100%',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
