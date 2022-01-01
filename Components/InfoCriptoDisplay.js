import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Colors } from '../assets/Colors';

const InfoCriptoDisplay = ({cryptoInfo}) => {
    return ( 
        <>
        <Text style={styles.big_title}>Cotizaciones CriptoMonedas</Text>
        <ScrollView>
         <View style={styles.info_container}>
            <Text style={styles.title}>Bitcoin</Text>
            <View style={styles.bit_container}>
             <View>
                <Image source={{uri: `https://www.cryptocompare.com${cryptoInfo.BTC.ARS.IMAGEURL}`}} style={styles.coin}/>
            </View>
            <View>
             <Text style={styles.texto}>Precio: {cryptoInfo.BTC.ARS.PRICE}</Text>  
            <Text style={styles.texto}>Precio Máx: {cryptoInfo.BTC.ARS.HIGHDAY}</Text>
            <Text style={styles.texto}>Precio min: {cryptoInfo.BTC.ARS.LOWDAY}</Text>
            <Text style={styles.texto}>Variacion del día: {cryptoInfo.BTC.ARS.CHANGEPCT24HOUR} %</Text>
            <Text style={styles.texto}>Última actualizacion: {cryptoInfo.BTC.ARS.LASTUPDATE}</Text>

            </View>
            </View>
        </View>
        <View>
            <Text style={styles.title}>Ethereum</Text>
            <View style={styles.bit_container}>
            <View>
                <Image source={{uri: `https://www.cryptocompare.com${cryptoInfo.ETH.ARS.IMAGEURL}`}} style={styles.coin}/>
            </View>
            <View>
             <Text style={styles.texto}>Precio: {cryptoInfo.ETH.ARS.PRICE}</Text>  
            <Text style={styles.texto}>Precio Máx: {cryptoInfo.ETH.ARS.HIGHDAY}</Text>
            <Text style={styles.texto}>Precio min: {cryptoInfo.ETH.ARS.LOWDAY}</Text>
            <Text style={styles.texto}>Variacion del día: {cryptoInfo.ETH.ARS.CHANGEPCT24HOUR} %</Text>
            <Text style={styles.texto}>Última actualizacion: {cryptoInfo.ETH.ARS.LASTUPDATE}</Text>
            </View>
            </View>
        </View>
        <View>
            <Text style={styles.title}>Binance Coin</Text>
            <View style={styles.bit_container}>

            <View>
                <Image source={{uri: `https://www.cryptocompare.com${cryptoInfo.BNB.ARS.IMAGEURL}`}} style={styles.coin}/>
            </View>
<View>
             <Text style={styles.texto}>Precio: {cryptoInfo.BNB.ARS.PRICE}</Text>  
            <Text  style={styles.texto}>Precio Máx: {cryptoInfo.BNB.ARS.HIGHDAY}</Text>
            <Text  style={styles.texto}>Precio min: {cryptoInfo.BNB.ARS.LOWDAY}</Text>
            <Text  style={styles.texto}>Variacion del día: {cryptoInfo.BNB.ARS.CHANGEPCT24HOUR} %</Text>
            <Text  style={styles.texto}>Última actualizacion: {cryptoInfo.BNB.ARS.LASTUPDATE}</Text>
        </View>
            </View>
        </View>

        <View>
            <Text style={styles.title}>USDT</Text>
            <View style={styles.bit_container}>

            <View>
                <Image source={{uri: `https://www.cryptocompare.com${cryptoInfo.USDT.ARS.IMAGEURL}`}} style={styles.coin}/>
            </View>
<View>
             <Text  style={styles.texto}>Precio: {cryptoInfo.USDT.ARS.PRICE}</Text>  
            <Text  style={styles.texto}>Precio Máx: {cryptoInfo.USDT.ARS.HIGHDAY}</Text>
            <Text  style={styles.texto}>Precio min: {cryptoInfo.USDT.ARS.LOWDAY}</Text>
            <Text style={styles.texto}>Variacion del día: {cryptoInfo.USDT.ARS.CHANGEPCT24HOUR} %</Text>
            <Text style={styles.texto}>Última actualizacion: {cryptoInfo.USDT.ARS.LASTUPDATE}</Text>
        </View>
            </View>
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
          width: 80,
          height: 80,
      },
      bit_container:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          
      },
        texto:{
            color: Colors.my_white,
            fontSize: 18,
        },
        title:{
            color: Colors.my_white,
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: '5%',
            marginEnd: '2%',
        },
        big_title:{
            color: Colors.my_white,
            fontSize: 22,
            fontWeight: 'bold',
            fontStyle: 'italic',
        },
        info_container:{
            backgroundColor: Colors.card_bg,
        },
});

 
export default InfoCriptoDisplay;