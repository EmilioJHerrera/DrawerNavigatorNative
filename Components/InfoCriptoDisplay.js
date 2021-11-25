import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const InfoCriptoDisplay = ({cryptoInfo}) => {
    return ( 
        <>
        <Text>Cotizaciones CriptoMonedas</Text>
        <View>
            <Text>Bitcoin</Text>
            <View>
                <Image source={{uri: `https://www.cryptocompare.com${cryptoInfo.BTC.ARS.IMAGEURL}`}} style={styles.coin}/>
            </View>
             <Text>Precio: {cryptoInfo.BTC.ARS.PRICE}</Text>  
            <Text>Precio Máx: {cryptoInfo.BTC.ARS.HIGHDAY}</Text>
            <Text>Precio min: {cryptoInfo.BTC.ARS.LOWDAY}</Text>
            <Text>Variacion del día: {cryptoInfo.BTC.ARS.CHANGEPCT24HOUR} %</Text>
            <Text>Última actualizacion: {cryptoInfo.BTC.ARS.LASTUPDATE}</Text>
        </View>
        
        </>
     );
};

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
      coin:{
          width: 50,
          height: 50,
      },
});

 
export default InfoCriptoDisplay;