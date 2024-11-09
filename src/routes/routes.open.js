import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/signin/index.js';
import SignUpScreen from '../screens/signup/index.jsx';

const Stack = createNativeStackNavigator()


export default function PublicRoutes() {
     return (
          <Stack.Navigator screenOptions={{
               headerShown: false,
          }}>
               <Stack.Screen name="SignIn" component={SignInScreen} />
               <Stack.Screen name="SignUp" component={SignUpScreen} />
          </Stack.Navigator>
     );
}

