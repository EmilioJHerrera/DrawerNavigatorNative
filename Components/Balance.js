import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Balance = () => {
    return (  
    <View style= {styles.container}>      
        <Text>Muestra los registros de los egresos y los ingresos</Text>
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
     
 
export default Balance;