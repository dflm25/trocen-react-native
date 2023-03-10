import {StyleSheet} from 'react-native';

import {theme} from '../../../assets/theme';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1
  }
});

export default styles;
