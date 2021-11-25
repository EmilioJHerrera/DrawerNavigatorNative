import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigator/Navigator';

import {Colors} from './assets/Colors';
import MainNavigator from './navigator/MainNavigator';
// import StackNavigator from './navigator/StackNavigator';



export default function App() {
  return (
    <View style={styles.container}>
     {/* creo que esto es lo quiere el desafio */}
     {/* <MainNavigator/> */}
     <Navigator/>
     {/* <StackNavigator/> */}
      {/* <Text>hola mundo</Text> */}

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
