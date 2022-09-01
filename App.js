/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import WelcomeScreen from './components/screens/WelcomeScreen';
import GetNameScreen from './components/screens/GetNameScreen';
import GetInfoScreen from './components/screens/GetInfoScreen';
import ResultScreen from './components/screens/ResultsScreen';

const Stack = createNativeStackNavigator();
const App = () => {
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
        name="Result"
        options={{headerShown: false}}
        component={ResultScreen}>
        </Stack.Screen>


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
