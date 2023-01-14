import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../assets/theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  ...theme,
  headerContainer: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    justifyContent: 'space-between',
    height: 80,
  },
  containerWhite: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -10,
    padding: 10,
    backgroundColor: theme.colors.gray,
  },
});

export default styles;
