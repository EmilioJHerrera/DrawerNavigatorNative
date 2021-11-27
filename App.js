import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigator/Navigator';

import {Colors} from './assets/Colors';
import MainNavigator from './navigator/MainNavigator';



export default function App() {
  return (
    <View style={styles.container}>
         {/* Usar MainNvigator para el desafio de TabNavigator, para el final usa Navigator*/}
         <MainNavigator/>
        {/* <Navigator/> */}
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
