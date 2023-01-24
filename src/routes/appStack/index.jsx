import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Pages
import BrandCreateScreen from '../../screens/forms/brands';
import Home from '../drawerStack';

const Stack = createNativeStackNavigator();

function appStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="BrandForm" component={BrandCreateScreen} />
    </Stack.Navigator>
  );
}

export default appStack;
