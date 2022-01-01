import React, { useState } from 'react';
import { View, Button, TouchableHighlight, Image, Text, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { Entypo } from '@expo/vector-icons';
import { Colors } from '../assets/Colors';


const ImageSelector = props => {
  const [pickedUri, setPickedUri] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permisos insuficientes',
        'Necesita dar permisos de la cámara para usar la aplicación',
        [{ text: 'Ok' }],
      );
      return false;
    }

    return true;
  }

  const handleTakeImage = async () => {
    const isCameraOk = await verifyPermissions();
    if (!isCameraOk) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      aspect: [16,9],
      quality: 0.8,
    });

    console.log(image)
    setPickedUri(image.uri);
    props.onImage(image.uri);
  };

  return (
    <View style={styles.container}>

      <View>
        <Text style= {styles.label}>Registro de facturas y comprobantes de pago</Text>
      </View>
      <View>
        <Text style= {styles.label}>Captura los comprobantes de pagos y muestralo en la pantalla</Text>
      </View>
      <View style={styles.preview}>
        {pickedUri
          ? <Image source={{ uri: pickedUri }} style={styles.image} />
          : <Entypo name="camera" size={40} color="white" />
        }
      </View>

      <View style={styles.container_boton}>
               <TouchableHighlight style={styles.boton} onPress={handleTakeImage}>
                   <Text style={styles.label_boton}>Tomar Foto</Text>
               </TouchableHighlight>
           </View>



      {/* <Button
        title="Tomar Foto"
        color='#A9A9A9'
        onPress={handleTakeImage}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '2.5%',
  },
  preview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.error_pink,
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
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

});

export default ImageSelector;