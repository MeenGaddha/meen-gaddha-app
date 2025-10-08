import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import CategoryScreen from '../screens/categoryScreen/CategoryScreen';
import Header from '../components/shared/Header';
import BottomTab from '../components/shared/BottomTab';


const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ 
          headerShown: false, 
          animation: 'none',
        }}
        initialRouteName="HomeScreen"
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />     
        <Stack.Screen name="Header" component={Header} /> 
        <Stack.Screen name="BottomTab" component={BottomTab} /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
