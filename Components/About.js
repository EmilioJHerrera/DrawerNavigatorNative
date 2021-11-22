import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const About = () => {
    return ( 
        <View style= {styles.container}>
            
            <Text style={styles.text}>La aplicacion es una herramienta para registro de ingresos y egresos, 
                tiene una seccion de inversion que muestra la cotizacion de criptomonedas,
                en la configuracion deberia tener una opcion para poder redondear hacia arriba con la finalidad de ahorrar.
                Sería muy útil poder tener varias cuentas para el mismo usuario (Ejemplo: TDC, efectivo, debito, prestamo, etc)
            </Text>
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
      text:{
        paddingHorizontal: '2.5%',
    },
});
 
export default About;