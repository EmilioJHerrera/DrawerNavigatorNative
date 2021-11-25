import React from 'react';
import { StyleSheet, Text, View , TouchableHighlight} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import Home from './Home';
import { useNavigation } from '@react-navigation/native';



const GoHome = () =>{ 
    const navigation = useNavigation();

    return( 
    <>
    <TouchableHighlight onPress={() => navigation.goBack()}>
     <FontAwesome name="home" size={24} color='#FFF' />
    </TouchableHighlight>
    </> 
    );
}
 
export default GoHome;