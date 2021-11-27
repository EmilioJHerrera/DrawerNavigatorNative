import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackNavigator from './StackNavigator';
import Home from "../Components/Home";

import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainNavigator = () => ( 
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen 
            name ="Home" 
            component ={Home}
            options={{
                tabBarIcon: () => (<FontAwesome name="home" size={24} color="black" />),
            }}/>
            <Tab.Screen 
            name="Balance_By_ StackN" 
            component={StackNavigator} 
            options={{
                tabBarIcon: () => (<FontAwesome name="money" size={24} color="black" />),
                headerShown: false,
            }}/>
        </Tab.Navigator>
    </NavigationContainer> 
        );

 
export default MainNavigator;