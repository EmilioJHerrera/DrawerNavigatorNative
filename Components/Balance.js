import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList,  } from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 
import { TouchableHighlight } from 'react-native-gesture-handler';

import { Dimensions } from "react-native";

import { useDispatch, useSelector } from 'react-redux';
import store from '../store';
import { addItem, removeItem } from '../store/actions/items.action';

import Cart from './Cart';
import NuevoItem from './NuevoItem';

import { useNavigation } from '@react-navigation/native';
import { Colors } from '../assets/Colors';


const Balance = () => {
const [showNew, setShowNew] = useState(false);
    // const navigation = useNavigation();
const data = useSelector(state => state.items.list);
console.log(data);

const dispach = useDispatch();

const handleDispatchItem = (item) => {
    //console.log ("aqui debe agregar el item a la lista cuando se oprime CTA");
    // dispach(addItem({id: 6, name: 'porRedux', amount: '1.234', type: 'income', category: 'salario'}));

}

// const handleDispatchDeleteItem = (id) => {
//     dispach(removeItem(id));
// }

//ESTA ES LA LISTA QUE SE TRATA DE VER SI SE PUEDE LEER COMO INITIALSTATE DESDE EL REDUCER
// const [data, setData] = useState([
//     {id: 1, name: 'Salario', amount: '1.000', type: 'income', category: 'salario'},
//     {id: 2, name: 'Regalo', amount: '500', type: 'outcome', category: 'extras'},
//     {id: 3, name: 'Compras', amount: '40', type: 'outcome', category: 'ocio'},
//     {id: 4, name: 'Freelo', amount: '20', type: 'income', category: 'pension'},
    
// ]);

//funcion para eliminar un dato de data
const deleteData = (id) => {
    setData(data.filter((item) => item.id !== id));
};
    
    
    return (  
    <View style= {styles.container}>      
 
        <FlatList 
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item=>(
            <View >
                <View style={styles.flatContainer}>
                    <Text style={styles.casilla}>{item.item.name}</Text>
                    <Text style={styles.casilla}>{item.item.amount} $</Text>
                    {item.item.type === 'outcome' ? <Text style={styles.outcome}>{item.item.category}</Text> : <Text style={styles.income}>{item.item.category}</Text>}
                    
                    
                    {/* <TouchableHighlight onPress={()=>deleteData(item.item.id)}> */}
                    <TouchableHighlight onPress={()=>handleDispatchDeleteItem(item.item.id)}> 
                           <AntDesign name="delete" size={24} color={Colors.my_white} />
                    </TouchableHighlight>
                    
                </View>
            </View>
        ))}/>
 
{showNew? <NuevoItem />: null}


            <View>
            <TouchableHighlight onPress={()=> setShowNew(!showNew)} style={styles.fab}> 
            {!showNew? <Text style={styles.label_boton}>+</Text>: <Text style={styles.label_boton}>-</Text>}
                           
                    </TouchableHighlight>
            </View>

             <Cart/>   
        {/* <Text>Muestra los registros de los egresos y los ingresos</Text> */}
    </View>
     );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors.background,
            // alignItems: 'center',
            // justifyContent: 'center',
          },
          flatContainer:{
            flexDirection: 'row',  
            paddingVertical: '2.5%',
            paddingHorizontal: '10%',
            backgroundColor: Colors.card_bg,
            marginVertical: '1%',
            marginHorizontal: '1%',
          },
          casilla:{
            width: '30%',
            fontSize: 20,
            color: Colors.my_white,
            },
            income:{
                color: Colors.income,
                width: '30%',
            fontSize: 20,
            },
            outcome:{
                color: Colors.outcome,
                width: '30%',
            fontSize: 20,
            },

          fab:{
            
             position: 'relative',
            width: 56,
            height: 56,
            alignItems: 'center',
            justifyContent: 'center',
            left: Dimensions.get("window").width - 76,
            bottom: 20,
            backgroundColor: Colors.success_blue,
            borderRadius: 30,
            elevation: 8
          },
          label_boton: {
            fontSize: 22,
            color: Colors.my_white,
             fontWeight: 'bold',
             },
    });
     
 
export default Balance;