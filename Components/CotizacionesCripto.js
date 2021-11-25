import React , {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import axios from 'axios';

import { Constants } from '../assets/Constants';
import { set } from 'react-native-reanimated';
import InfoCriptoDisplay from './InfoCriptoDisplay';

const CotizacionesCripto = () => {
    //States
    const [cryptoInfo, setCryptoInfo] = useState([]);
    const [apiReady, setApiReady] = useState(false);
    //efecto de consulta de API para Bitcoin, etherium, binancecoin, usdt
    useEffect(()=>{
        const consultarAPI = async () => {
          try {
            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,BNB,USDT&tsyms=ARS,USD,EUR&api_key=${Constants.API_KEY_CRYPTO}`
            const resultado = await axios.get(url);
            console.log(resultado.data.DISPLAY.ETH.ARS.CHANGEPCTDAY);
            setCryptoInfo(resultado.data.DISPLAY);
            //console.log('cryptoInfo', cryptoInfo.ETH.ARS.IMAGEURL);
            setApiReady(true);  
          } catch (error) {
              console.log(error);
          }
          
          
            
           
        }
        consultarAPI();
        console.log("ESTOY RENDERIZANDO")
    },[]);
    
    
    
    //HAY QUE HACER RENDERIZADO CONDICIONAL Y VERIFICAR QUE LA API ESTE LISTA; SINO CONVULSIONA!!
    //CONVERTIR A FLATLIST PARA MOSTRAR LOS DATOS, PERO LOS DATOS SON LOS CORRECTOS, PERO NO SE MUESTRAN
    
    return ( 
        <View style= {styles.container}>

            {apiReady?<InfoCriptoDisplay cryptoInfo={cryptoInfo} />: null} 
            
            {!apiReady?<Text>Cargando...</Text>: null} 
            


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
      coin:{
          width: 50,
          height: 50,
      },
});
 
export default CotizacionesCripto;