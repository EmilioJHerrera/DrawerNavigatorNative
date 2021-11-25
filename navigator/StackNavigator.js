import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { StyleSheet, Text, View } from 'react-native';

import Balance from '../Components/Balance';

const Stack = createNativeStackNavigator();

const StackNavigator = () => (

        <Stack.Navigator>
           <Stack.Screen name="Balance" component={Balance} />
        </Stack.Navigator>

      );

 
export default StackNavigator;