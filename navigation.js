import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';
import UserScreen from './screens/UserScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const screenOption = {
    headerShown: false,
}

export const SignedInStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={screenOption}>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name='NewPostScreen' component={NewPostScreen}/>
            <Stack.Screen name='UserScreen' component={UserScreen}/>
        </Stack.Navigator>
    </NavigationContainer>

  )
}

export const SignedOutStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginScreen' screenOptions={screenOption}>
            <Stack.Screen name='LoginScreen' component={LoginScreen}/>
            <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
        </Stack.Navigator>
    </NavigationContainer>

  )
}


const styles = StyleSheet.create({})