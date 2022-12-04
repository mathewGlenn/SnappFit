/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

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
import AsyncStorage from '@react-native-async-storage/async-storage';
import BMICalculator from './components/screens/BMICalculator';
import CameraScreen from './components/screens/CameraScreen';
import DiscoverScreen from './components/screens/discover/DiscoverScreen';
import ExercisesScreen from './components/screens/ExercisesScreen';
import AboutUs from './components/screens/AboutUs';
import BodyTypeIdentifier from './components/screens/BodyTypeIdentifier';
import History from './components/screens/History'

import {useState} from 'react';

const Stack = createNativeStackNavigator();
const App = () => {
  const [isFirstTimeUse, setIfFirstTimeUse] = useState(true);

  const checkIfFirstTimeUse = async () => {
    try {
      const value = await AsyncStorage.getItem('@firstTimeUser');

      if (value === 'false') {
        setIfFirstTimeUse(false);
      } else {
        setIfFirstTimeUse(true);
      }
    } catch (e) {
      alert('failed to fetch data');
    }
  };

  //hide the splash screen
  useEffect(() => {
    checkIfFirstTimeUse();
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, animation: 'fade'}}>
        {isFirstTimeUse ? (
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
        ) : (
            <Stack.Screen name="Home" component={HomeScreen} />
        )}
        <Stack.Screen name="GetName" component={GetNameScreen} />
        <Stack.Screen name="GetInfo" component={GetInfoScreen} />
        <Stack.Screen name="IdenBodType" component={IdenBodType} />
        <Stack.Screen name="FitnessInfo" component={FitnessInfoScreen} />
        <Stack.Screen name="More" component={MoreScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name='BMICalc' component={BMICalculator} />
        <Stack.Screen name='Camera' component={CameraScreen} />

        <Stack.Screen name='Discover' component={DiscoverScreen}/>
        <Stack.Screen name='Exercises' component={ExercisesScreen}/>
        <Stack.Screen name='About' component={AboutUs}/>

        <Stack.Screen name='BodyTypeIdentifier' component={BodyTypeIdentifier}/>
        <Stack.Screen name='History' component={History}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Router = props => {};

export default App;
