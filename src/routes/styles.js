import {StyleSheet} from 'react-native';
import {theme} from '../assets/theme';

const styles = StyleSheet.create({
  ...theme,
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
