import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList,  } from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 
import { TouchableHighlight } from 'react-native-gesture-handler';


// hay que ingresar los gastos en distintas categorias
// ingresos (salario, rentas, pensiones);
// gastos esenciales (vivienda, transporte, comida, servicios para el hogar y medicinas); 
//ocio (restaurantes, compras, gimnasio, etc) 
//y extras (regalos, reparaciones, viajes).

//BALANCE
//CUANTO HAS CONSEGUIDO AHORRAR
//CUANTE HUBIESE GUSTADO CONSEGUID AHORRAR
//Cuanto estas gastando

const Balance = () => {

const [data, setData] = useState([
    {id: 1, name: 'Salario', amount: '1.000', type: 'income', category: 'salario'},
    {id: 2, name: 'Regalo', amount: '500', type: 'outcome', category: 'extras'},
    {id: 3, name: 'Compras', amount: '40', type: 'outcome', category: 'ocio'},
    {id: 4, name: 'Freelo', amount: '20', type: 'income', category: 'pension'},
]);

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
                    <Text style={styles.casilla}>{item.item.category}</Text>
                    <TouchableHighlight onPress={()=>deleteData(item.item.id)}> 
                           <AntDesign name="delete" size={24} color="black" />
                    </TouchableHighlight>
                    
                </View>
            </View>
        ))}/>
 
 
        <Text>Muestra los registros de los egresos y los ingresos</Text>
    </View>
     );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            // alignItems: 'center',
            // justifyContent: 'center',
          },
          flatContainer:{
            flexDirection: 'row',  
            paddingVertical: '2.5%',
                paddingHorizontal: '10%',
          },
          casilla:{
            width: '30%',
        
          },
    });
     
 
export default Balance;