import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import authScreen from "../../screen/auth/authScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return ( 
        <Stack.Navigator screenOptions = {{headerShown:false}}>
            <Stack.Screen name="Auth" component={authScreen} />
        </Stack.Navigator>
     );
}
 
export default AuthNavigator;