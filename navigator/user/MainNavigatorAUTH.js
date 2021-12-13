import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigatorSinContainer from './NavigatorSinContainer';

import AuthNavigator from './AuthNavigator';

import { useSelector } from 'react-redux';

const MainNavigatorAUTH = () => {

    const user = useSelector(state => state.auth.user);

    return (<NavigationContainer>
        {user ? <NavigatorSinContainer/> : <AuthNavigator />}
        {/* <AuthNavigator /> */}
   </NavigationContainer>)

};

 
export default MainNavigatorAUTH;