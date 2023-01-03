import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../assets/theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  ...theme,
  button: {
    width: width - 40,
    marginVertical: 10,
    paddingVertical: 2,
    borderRadius: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
});

export default styles;
