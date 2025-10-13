import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/homeScreen/HomeScreen';
// import CategoryScreen from '../screens/categoryScreen/CategoryScreen';
import Header from '../components/shared/Header';
import BottomTab from '../components/shared/BottomTab';

import GameInstructions1 from "../screens/Instrucation/GameInstructions.js";
import SplashScreen from "../screens/auth/SplashScreen.js";
import SignUpScreen from "../screens/auth/SignUpScreen.js";
import SignInScreen from "../screens/auth/SignInScreen.js";



const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        {/* <Stack.Screen name="CategoryScreen" component={CategoryScreen} />      */}
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="GameInstructions1" component={GameInstructions1} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
