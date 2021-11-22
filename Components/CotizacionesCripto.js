import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CotizacionesCripto = () => {
    return ( 
        <View style= {styles.container}>
            
        <Text>Cotizaciones CriptoMonedas</Text>
        <Text style={styles.text}>
            Aqui una muestra de las cotizaciones de las criptomonedas mas populares,
            una muestra para incentivar la inversion en criptomonedas.
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
          paddingHorizontal: '2%',
          paddingTop: '2%',
      },
});
 
export default CotizacionesCripto;