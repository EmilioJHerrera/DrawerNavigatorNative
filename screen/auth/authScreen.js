import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableHighlight, TextInput } from 'react-native';
import {  } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

import { signUp } from '../../store/actions/auth.actions';
const authScreen = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        dispatch(signUp(email, password));
    }

    return ( <>
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View>
                <Text>
                    Registro:
                </Text>
                    <View> 
                        <Text> Email:</Text>
                        <TextInput
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                        />
                    </View>
                    <View> 
                        <Text> Clave:</Text>
                        <TextInput
                        secureTextEntry={true}
                        autoCapitalize="none"
                        value={password}
                        onChangeText={setPassword}
                        />
                    </View>
                
                <TouchableHighlight style={styles.button} onPress={handleSignUp}>
                    <Text>
                        registrarse
                    </Text>
                </TouchableHighlight>
                
            </View>
        </KeyboardAvoidingView>
    </>
    )
};


const styles = StyleSheet.create({
 container:{
    flex:1,
    textAlign:'center',
    justifyContent:'center',
 },
 button:{
     backgroundColor:'#BBB',
 }

});
 
export default authScreen;