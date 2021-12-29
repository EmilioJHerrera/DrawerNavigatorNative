import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const InfoCriptoDisplay = ({cryptoInfo}) => {
    return ( 
        <>
        <Text>Cotizaciones CriptoMonedas</Text>
        <ScrollView>
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
        <View>
            <Text>Ethereum</Text>
            <View>
                <Image source={{uri: `https://www.cryptocompare.com${cryptoInfo.ETH.ARS.IMAGEURL}`}} style={styles.coin}/>
            </View>
             <Text>Precio: {cryptoInfo.ETH.ARS.PRICE}</Text>  
            <Text>Precio Máx: {cryptoInfo.ETH.ARS.HIGHDAY}</Text>
            <Text>Precio min: {cryptoInfo.ETH.ARS.LOWDAY}</Text>
            <Text>Variacion del día: {cryptoInfo.ETH.ARS.CHANGEPCT24HOUR} %</Text>
            <Text>Última actualizacion: {cryptoInfo.ETH.ARS.LASTUPDATE}</Text>
        </View>
        <View>
            <Text>Binance Coin</Text>
            <View>
                <Image source={{uri: `https://www.cryptocompare.com${cryptoInfo.BNB.ARS.IMAGEURL}`}} style={styles.coin}/>
            </View>
             <Text>Precio: {cryptoInfo.BNB.ARS.PRICE}</Text>  
            <Text>Precio Máx: {cryptoInfo.BNB.ARS.HIGHDAY}</Text>
            <Text>Precio min: {cryptoInfo.BNB.ARS.LOWDAY}</Text>
            <Text>Variacion del día: {cryptoInfo.BNB.ARS.CHANGEPCT24HOUR} %</Text>
            <Text>Última actualizacion: {cryptoInfo.BNB.ARS.LASTUPDATE}</Text>
        </View>
        <View>
            <Text>USDT</Text>
            <View>
                <Image source={{uri: `https://www.cryptocompare.com${cryptoInfo.USDT.ARS.IMAGEURL}`}} style={styles.coin}/>
            </View>
             <Text>Precio: {cryptoInfo.USDT.ARS.PRICE}</Text>  
            <Text>Precio Máx: {cryptoInfo.USDT.ARS.HIGHDAY}</Text>
            <Text>Precio min: {cryptoInfo.USDT.ARS.LOWDAY}</Text>
            <Text>Variacion del día: {cryptoInfo.USDT.ARS.CHANGEPCT24HOUR} %</Text>
            <Text>Última actualizacion: {cryptoInfo.USDT.ARS.LASTUPDATE}</Text>
        </View>
</ScrollView>
        
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