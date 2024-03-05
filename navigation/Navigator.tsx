import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Account from 'screens/account/Account';
import Home from 'screens/home/Home';

const Stack = createNativeStackNavigator();

const Navigator = ({ children }: any) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{ title: 'My account', headerShown: true }}
        />
      </Stack.Navigator>
      {children}
    </NavigationContainer>
  );
};

export default Navigator;
