import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigator/Navigator';
// import StackNavigator from './navigator/StackNavigator';



export default function App() {
  return (
    <View style={styles.container}>
     <Navigator/>
     {/* <StackNavigator/> */}
      {/* <Text>hola mundo</Text> */}

          </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
