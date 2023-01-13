import {StyleSheet} from 'react-native';
import {theme} from '../../assets/theme';

const styles = StyleSheet.create({
  ...theme,
  container: {
    flex: 1,
    padding: 0,
  },    
  scrollView: {
    padding: 0,
    paddingTop: 0,
  },
  headerImage: {
    padding: 20,
    margin: 0,
  },
  name: {
    color: theme.colors.white,
    fontSize: 18,
  },
  store: {
    color: theme.colors.white,
    fontSize: 12,
    fontWeight: '400',
  },
  bottomContainer: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray,
    padding: 20,
  },
  storeContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    color: '#fff',
    marginLeft: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  signout: {
    marginLeft: 10,
  }
});

export default styles;
