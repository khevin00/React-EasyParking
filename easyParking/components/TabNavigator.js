import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SplashScreen from '../screens/SplashScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function TabNavigator () {
  return (
    <Stack.Navigator initialrRouteName="HomeScreen" screenOptions={{headerShown: false,}}>
        <Stack.Screen initialParams={{screen: 'HomeScreen',}} options={{unmountOnBlur: true,}} name="HomeScreen" component={HomeScreen}/>  
        <Stack.Screen initialParams={{screen: 'RegisterScreen',}} options={{unmountOnBlur: true,}} name="RegisterScreen" component={RegisterScreen}/>
    </Stack.Navigator>
  );
}
