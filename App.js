/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Settings, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import WelcomeScreen from './components/screens/WelcomeScreen';
import GetNameScreen from './components/screens/GetNameScreen';
import GetInfoScreen from './components/screens/GetInfoScreen';
import FitnessInfoScreen from './components/screens/FitnessInfoScreen';
import IdenBodType from './components/screens/IdenBodTypeScreen';
import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './components/screens/HomeScreen';
import MoreScreen from './components/screens/MoreScreen';
import SettingsScreen from './components/screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const App = () => {

  //hide the splash screen
  React.useEffect(()=>{
    SplashScreen.hide();
  })

  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen
        name="Welcome"
        options={{headerShown: false}}
        component={WelcomeScreen}>
        </Stack.Screen>

        <Stack.Screen
        name="GetName"
        options={{headerShown: false}}
        component={GetNameScreen}>
        </Stack.Screen>

        <Stack.Screen
        name="GetInfo"
        options={{headerShown: false}}
        component={GetInfoScreen}>
        </Stack.Screen>

        <Stack.Screen
        name="FitnessInfo"
        options={{headerShown: false, animation:'none'}}
        component={FitnessInfoScreen}>
        </Stack.Screen>

        <Stack.Screen
        name="IdenBodType"
        options={{headerShown: false}}
        component={IdenBodType}>
        </Stack.Screen>

        <Stack.Screen
        name="Home"
        options={{headerShown: false, animation:'none'}}
        component={HomeScreen}>
        </Stack.Screen>

        <Stack.Screen
        name="More"
        options={{headerShown: false, animation:'none'}}
        component={MoreScreen}>
        </Stack.Screen>

        <Stack.Screen
        name="Settings"
        options={{headerShown: false, animation:'none'}}
        component={SettingsScreen}>
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
