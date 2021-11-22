import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Home = ({navigation}) => {
    return ( 
        <View style= {styles.container}>
            {/* <Text>Home</Text> */}
            <Button onPress={()=> navigation.navigate("Balance")} title="Balance"></Button>
            <Button onPress={()=> navigation.navigate("Grafico")} title="Graficos"></Button>
            <Button onPress={()=> navigation.navigate("CotizacionesCripto")} title="Criptomonedas"></Button>
            <Button onPress={()=> navigation.navigate("About")} title="About"></Button>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
   
});
 
export default Home;