// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';

export type RootStackParamList = {
  Home: undefined;
  Main: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Main" component={MainScreen} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
