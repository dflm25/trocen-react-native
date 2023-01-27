import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

// Screens
import HomeScreen from '../../screens/home';
import BrandsScreen from '../../screens/brand';
import ProductsScreen from '../../screens/products';
import CustomDrawer from '../../components/drawer';

// styles
import styles from '../styles';

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: styles.colors.primary,
        drawerActiveTintColor: styles.colors.white,
        drawerLabelStyle: {marginLeft: -22},
      }}
      initialRouteName="Categorias">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({color}) => <Icon name="home" size={22} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Brands"
        component={BrandsScreen}
        options={{
          title: 'Marcas',
          drawerIcon: ({color}) => (
            <Icon name="th-list" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Productos"
        component={ProductsScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="barcode" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Inventario"
        component={HomeScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="database" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Ventas"
        component={HomeScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="money" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Compras"
        component={HomeScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="table" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
