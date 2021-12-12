import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';

import {confirmCart} from '../store/actions/cart.actions';

// import { confirmCart } from '../../store/actions/cart.actions';

const Cart = () => {
    const items = useSelector(state => state.cart.items);
    
    const dispach = useDispatch();
//es para escribir en firebase los datos que se estan enviando
    const handleConfirmCart = () => {
dispach( confirmCart(items))
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