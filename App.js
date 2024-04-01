import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InitialScreen } from './screens/Initial';
import { SignUpEmailScreen } from './screens/SignUpEmail';
import { SignUpPasswordScreen } from './screens/SignUpPassword';
import { SignUpNameScreen } from './screens/SignUpName';
import { SignUpFinishScreen } from './screens/SignUpFinish';
import { LoginScreen } from './screens/Login';
import { HomeScreen } from './screens/Home';
import { BookScreen } from './screens/Book';
import { CartScreen } from './screens/Cart';
import { ProfileScreen } from './screens/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Initial" component={InitialScreen} />
        <Stack.Screen name="SignUpEmail" component={SignUpEmailScreen} />
        <Stack.Screen name="SignUpPassword" component={SignUpPasswordScreen} />
        <Stack.Screen name="SignUpName" component={SignUpNameScreen} />
        <Stack.Screen name="SignUpFinish" component={SignUpFinishScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Book" component={BookScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
