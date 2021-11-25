import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import StackNavigator from './StackNavigator';
import Navigator from './Navigator';
import Home from "../Components/Home";

const Tab = createBottomTabNavigator();

const MainNavigator = () => ( 
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name ="Home" component ={Home}/>
            <Tab.Screen name="Stack" component={StackNavigator} />
        </Tab.Navigator>
    </NavigationContainer> 
        );

 
export default MainNavigator;