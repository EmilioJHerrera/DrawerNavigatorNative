import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, Alert, TouchableHighlight} from 'react-native';

import {Picker} from '@react-native-picker/picker';

import { useDispatch, useSelector } from 'react-redux';
import store from '../store';
import { addItem, removeItem } from '../store/actions/items.action';
import ImageSelector from './ImageSelector';
import { Colors } from '../assets/Colors';
const NuevoItem = () => {
    //{id: 1, name: 'Salario', amount: '1.000', type: 'income', category: 'salario'}
    
const [id, setId] = useState("");
const [name, setName] = useState("");
const [amount, setAmount] = useState(0);
const [type, setType] = useState();
const [category, setCategory] = useState();

const [newItem, setNewItem] = useState(false);

const data = useSelector(state => state.items.list);
console.log(data);



//funcion para mostrar alert
const showAlert =() =>{
    Alert.alert(
        "Error",   //titulo
        "Todos los campos son obligatorios", //mensaje
        [{
            text:"OK"     //arreglo de botones
        }]
    )
}

// useEffect(()=>{
//     const guardarStorage = async () => {
//         try {
//             await AsyncStorage.setItem('items', JSON.stringify(data));
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     guardarStorage();
//     console.log("se guardo en storage");
// },[newItem]);


const handleAddItem = () => {
    //validar
    if(name.trim() === "" || amount.trim() === "" || category.trim() === ""){
        showAlert();
        return;
    }
    //agregar item
    setId((Math.floor(Math.random() * 100)).toString());
    store.dispatch(addItem({id: id, name: name, amount: amount, type: type, category: category}));
    //variable auxiliar para el storage      
    setNewItem(!newItem);
}

    return ( 
     <ScrollView style={styles.container}>
       <View>
            <Text style= {styles.label}>Nombre:</Text>
            <TextInput style= {styles.input_text} onChangeText={(texto)=>setName(texto)}/>
        </View>

        <View>
            <Text style= {styles.label}>Monto:</Text>
            <TextInput
            style= {styles.input_text} 
            keyboardType="numeric" 
            onChangeText={(texto)=>setAmount(texto)}/>
        </View>

        <View>
            <Text style= {styles.label}>Tipo:</Text>
            <Picker
            style= {styles.input_text} 
                selectedValue={type}
                onValueChange={(itemValue, itemIndex) =>
                setType(itemValue)
            }>
                <Picker.Item label="Ingreso" value="income" />
                <Picker.Item label="Egreso" value="outcome" />
            </Picker>
        </View>

        <View>
            <Text style= {styles.label}>Categoria:</Text>
            <TextInput style= {styles.input_text}  onChangeText={(texto)=>setCategory(texto)}/>
        </View>

        <View style={styles.container_boton}>
               <TouchableHighlight style={styles.boton} onPress={()=>handleAddItem()}>
                   <Text style={styles.label_boton}>Agregar</Text>
               </TouchableHighlight>
           </View>

{/* 
        <Button title="Agregar" onPress={()=>handleAddItem()}/> */}

     </ScrollView>  
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 20,
        paddingTop: 30,

      },
    container_boton:{
        width: '100%',
        alignItems: 'center',
      justifyContent: 'center',
      marginVertical: '20%',
    },
    boton: {
      width: '80%',
      backgroundColor: Colors.success_blue,
      borderRadius: 20,
      padding: 10,
      marginVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    label_boton: {
      fontSize: 22,
      color: Colors.my_white,
    },
    label: {
        fontSize: 22,
        color: Colors.my_white,
        marginBottom: 10,
    },
    input_text: {
        borderBottomColor: Colors.error_pink,
        backgroundColor: Colors.card_bg,
        borderBottomWidth: 1,
        width: '100%',
        padding: 10,
        marginBottom: 10,
        color: Colors.my_white,
    },
});
 
export default NuevoItem;