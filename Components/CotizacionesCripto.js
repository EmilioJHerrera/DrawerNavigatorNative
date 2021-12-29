import React , {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import axios from 'axios';

import { Constants } from '../assets/Constants';
import { set } from 'react-native-reanimated';
import InfoCriptoDisplay from './InfoCriptoDisplay';

const CotizacionesCripto = () => {
    //States
    const [flatData, setFlatData] = useState([]);
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
            setFlatData([
                {id: 2, name: 'Ethereum', price: `${cryptoInfo.ETH.ARS.PRICE}`, max: `${cryptoInfo.ETH.ARS.HIGHDAY}`, min: `${cryptoInfo.ETH.ARS.LOWDAY}`, change: `${cryptoInfo.ETH.ARS.CHANGEPCT24HOUR}`, image: `https://www.cryptocompare.com${cryptoInfo.ETH.ARS.IMAGEURL}`},
                {id: 1, name: 'Bitcoin', price: `${cryptoInfo.BTC.ARS.PRICE}`, max: `${cryptoInfo.BTC.ARS.HIGHDAY}`, min: `${cryptoInfo.BTC.ARS.LOWDAY}`, change: `${cryptoInfo.BTC.ARS.CHANGEPCT24HOUR}`, image: `https://www.cryptocompare.com${cryptoInfo.BTC.ARS.IMAGEURL}`},
                {id: 3, name: 'BinaceCoin', price: `${cryptoInfo.BNB.USD.PRICE}`, max: `${cryptoInfo.BNB.ARS.HIGHDAY}`, min: `${cryptoInfo.BNB.ARS.LOWDAY}`, change: `${cryptoInfo.BNB.ARS.CHANGEPCT24HOUR}`, image: `https://www.cryptocompare.com${cryptoInfo.BNB.ARS.IMAGEURL}`},
                {id: 4, name: 'Usdt', price: `${cryptoInfo.USDT.USD.PRICE}`, max: `${cryptoInfo.USDT.ARS.HIGHDAY}`, min: `${cryptoInfo.USDT.ARS.LOWDAY}`, change: `${cryptoInfo.USDT.ARS.CHANGEPCT24HOUR}`, image: `https://www.cryptocompare.com${cryptoInfo.USDT.ARS.IMAGEURL}`},        
            ]);
          } catch (error) {
              console.log(error);
          }
          
          
            
           
        }
        consultarAPI();
        console.log("ESTOY RENDERIZANDO")




    },[]);
    

    
    
    //DESCOMPONENTIZAR EL FLATLIST, ASI GARANTIZA SU CARGA ANTES DE QUE EL COMPONENTE SE RENDERIZE (has un cambio y crtl s)
    // PREVENIDO QUE EL HOOK DE NAVIGATOR NO RERENDERIZA EL COMPONENTE (BUG O FEATURE?)
    return ( 
        <View style= {styles.container}>

            {apiReady?<InfoCriptoDisplay cryptoInfo={cryptoInfo} />: <Text>Cargando...</Text>} 
            
            {!apiReady?<Text>Cargando...</Text>: null} 
             
            {/* {apiReady?
            <FlatList 
        data={flatData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item=>(
            <View >
                <View>
                    <Text >{item.item.name}</Text>
                    <Text >{item.item.price}</Text>
                    <Text >{item.item.max}</Text>
                    <Text >{item.item.min}</Text>
                    <Text >{item.item.change}</Text>
                    <View>
                        <Image source={{uri:item.item.image}} style={{ width: 50, height: 50, }}/>
                    </View>
                    
                </View>
            </View>
        ))}/>
        : <Text>Cargando flatlist...</Text>}

 */}

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