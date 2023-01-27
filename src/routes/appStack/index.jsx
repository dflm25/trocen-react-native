import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Pages
import BrandCreateScreen from '../../screens/forms/brands';
import ProductCreateScreen from '../../screens/forms/products';
import Home from '../drawerStack';

const Stack = createNativeStackNavigator();

function appStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen options={{ title: 'Crear una marca' }} name="BrandForm" component={BrandCreateScreen} />
      <Stack.Screen options={{ title: 'Crear una producto' }} name="ProductForm" component={ProductCreateScreen} />
    </Stack.Navigator>
  );
}

export default appStack;
