import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../assets/Colors';

const About = () => {
    return ( 
        <View style= {styles.container}>
            
            <Text style={styles.text}>La aplicacion es una herramienta para registro de ingresos y egresos, 
                tiene una seccion de inversion que muestra la cotizacion de criptomonedas.
            </Text>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text:{
        fontSize: 20,
        color: Colors.my_white,
        paddingHorizontal: '2.5%',
    },
});
 
export default About;