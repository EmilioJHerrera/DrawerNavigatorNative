import React from 'react';
import { Button, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
// import { TouchableHighlight } from 'react-native-gesture-handler';
import { Colors } from '../assets/Colors';
const Home = ({navigation}) => {
    return ( 
        <View style= {styles.container}>
            {/* <Text>Home</Text> */}
           
           <View style={styles.container_boton}>
               <TouchableHighlight style={styles.boton} onPress={()=> navigation.navigate("Balance")}>
                   <Text style={styles.label_boton}>Balance</Text>
               </TouchableHighlight>
           </View>
           <View style={styles.container_boton}>
               <TouchableHighlight style={styles.boton} onPress={()=> navigation.navigate("Nuevo")}>
                   <Text style={styles.label_boton}>Nuevo Ingreso</Text>
               </TouchableHighlight>
           </View>
           <View style={styles.container_boton} >
               <TouchableHighlight style={styles.boton} onPress={()=> navigation.navigate("Grafico")}>
                   <Text style={styles.label_boton}>Gráficos</Text>
               </TouchableHighlight>
           </View>
           <View style={styles.container_boton}>
               <TouchableHighlight style={styles.boton} onPress={()=> navigation.navigate("CotizacionesCripto")}>
                   <Text style={styles.label_boton}>Criptomonedas</Text>
               </TouchableHighlight>
           </View>
           <View style={styles.container_boton}>
               <TouchableHighlight style={styles.boton} onPress={()=> navigation.navigate("About")}>
                   <Text style={styles.label_boton}>Sobre la App</Text>
               </TouchableHighlight>
           </View>
           <View style={styles.container_boton}>
               <TouchableHighlight style={styles.boton} onPress={()=> navigation.navigate("Camara")}>
                   <Text style={styles.label_boton}>Registro Foto</Text>
               </TouchableHighlight>
           </View>


        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
      },
      container_boton:{
          width: '100%',
          alignItems: 'center',
        justifyContent: 'center',
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

      }
   
});
 
export default Home;