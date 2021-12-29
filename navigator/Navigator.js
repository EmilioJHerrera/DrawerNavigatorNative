import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import React from 'react';

import About from '../Components/About';
import Home from '../Components/Home';
import Balance from '../Components/Balance';
import Grafico from '../Components/Grafico';
import CotizacionesCripto from '../Components/CotizacionesCripto';
import GoHome from '../Components/GoHome';
import ImageSelector from '../Components/ImageSelector';
import NuevoItem from '../Components/NuevoItem';

import { Colors } from '../assets/Colors';

const Drawer = createDrawerNavigator();

const Navigator = () => (
        <NavigationContainer>      
        
        <Drawer.Navigator

        initialRouteName="Home"
        
        screenOptions={{
           headerStyle: { backgroundColor: Colors.background,},
           headerTintColor: Colors.my_white,
           headerTitleStyle: { fontSize: 22},
        }}>
           <Drawer.Screen name="Home" component={Home} options={{headerTitle: 'My Home'}}/>
          <Drawer.Screen name="About" component={About} options={{headerTitle: 'About the app', headerRight: ()=> <GoHome/>}}/>
           <Drawer.Screen name="Balance" component={Balance} options={{headerTitle: 'Balance', headerRight: ()=> <GoHome/>}}/>
           <Drawer.Screen name="Nuevo" component={NuevoItem} options={{headerTitle: 'Nuevo valor', headerRight: ()=> <GoHome/>}}/>
           <Drawer.Screen name="Grafico" component={Grafico} options={{headerTitle: 'Grafico', headerRight: ()=> <GoHome/>}}/>
           <Drawer.Screen name="CotizacionesCripto" component={CotizacionesCripto} options={{headerTitle: 'Best Crypto', headerRight: ()=> <GoHome/>}}/>
           <Drawer.Screen name="Camara" component={ImageSelector} options={{headerTitle: 'Camara'}}/>
        </Drawer.Navigator>
       </NavigationContainer>
      );

     
export default Navigator;