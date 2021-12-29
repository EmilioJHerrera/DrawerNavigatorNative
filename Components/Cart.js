import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, Alert } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';

import {confirmCart} from '../store/actions/cart.actions';

// import { confirmCart } from '../../store/actions/cart.actions';

const Cart = () => {
    // const items = useSelector(state => state.cart.items);
    const items = useSelector(state => state.items.list);
    const dispach = useDispatch();



    //funcion para mostrar alert
const showAlert =() =>{
    Alert.alert(
        "Éxito",   //titulo
        "Revisa tu carpeta en firebase", //mensaje
        [{
            text:"OK"     //arreglo de botones
        }]
    )
}

//es para escribir en firebase los datos que se estan enviando
    const handleConfirmCart = () => {
dispach( confirmCart(items));
showAlert();

    }
    
    return ( 
        <View>
            <TouchableHighlight style={styles.boton} onPress={handleConfirmCart}>
                <Text>enviar a base de datos</Text>
            </TouchableHighlight>
        </View>
     );
}
 
const styles = StyleSheet.create({
    boton:{
        backgroundColor: '#00a680',
        padding: '5%',
    },
})
export default Cart;