import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { StyleSheet, Text, View } from 'react-native';

import About from '../Components/About';
import Home from '../Components/Home';

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
           <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
        </NavigationContainer>
      );

 
export default StackNavigator;