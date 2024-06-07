import React from "react"
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";


import Bienvenido from "./Navegacion/Bienvenido";
import Rec_Cuenta from "./Navegacion/Rec_Cuenta";
import Rec_Cuenta1 from "./Navegacion/Rec_Cuenta1";
import Crear_Cuenta from "./Navegacion/Crear_Cuenta";
import Home from "./Navegacion/Home";

const Stack = createStackNavigator();

function Stacks() {
    return (
        <Stack.Navigator
            initialRouteName="Bienvenido"
        >
            <Stack.Screen
                name="Bienvenido"
                component={Bienvenido}
            />

            <Stack.Screen
                name="Rec_Cuenta"
                component={Rec_Cuenta}
            />


            <Stack.Screen
                name="Rec_Cuenta1"
                component={Rec_Cuenta1}
            />

            <Stack.Screen
                name="Crear_Cuenta"
                component={Crear_Cuenta}
            />

<Stack.Screen
                name="Home"
                component={Home}
            />





        </Stack.Navigator>

    );
}
export default function Navegacion() {
    return (
        <NavigationContainer>
            <Stacks />
        </NavigationContainer>
    )
}
