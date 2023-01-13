import {createDrawerNavigator} from '@react-navigation/drawer';

// Screens
import {HomeScreen} from '../../screens/home';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
