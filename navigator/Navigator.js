import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import React from 'react';

import About from '../Components/About';
import Home from '../Components/Home';
import Balance from '../Components/Balance';
import Grafico from '../Components/Grafico';
import CotizacionesCripto from '../Components/CotizacionesCripto';

const Drawer = createDrawerNavigator();

const Navigator = () => (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
           <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="About" component={About} />
           <Drawer.Screen name="Balance" component={Balance} />
           <Drawer.Screen name="Grafico" component={Grafico} />
           <Drawer.Screen name="CotizacionesCripto" component={CotizacionesCripto} />
        </Drawer.Navigator>
        </NavigationContainer>
      );

 
export default Navigator;