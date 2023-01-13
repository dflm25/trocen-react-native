import {DefaultTheme} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000',
    primary: '#560CCE',
    secondary: '#414757',
    error: '#f13a59',
    white: '#fff',
    gray: '#ccc'
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
  },
};
