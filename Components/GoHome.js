import React from 'react';
import { StyleSheet, Text, View , TouchableHighlight} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import Home from './Home';

const handleHome = () => {
    
};

const GoHome = ({navigation}) => ( 
    <>
    <TouchableHighlight onPress={() => navigation.navigate("Home")}>
     <FontAwesome name="home" size={24} color='#FFF' />
    </TouchableHighlight>
    </> 
    );

 
export default GoHome;