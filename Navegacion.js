import React from "react"
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";


import Inicio from "./Navegacion/Inicio";
import Crear_Cuenta from "./Navegacion/Crear_Cuenta";
import Crear_producto from "./Navegacion/Crear_producto";
import Principal from "./Navegacion/Principal";
import ListaProducto from "./Navegacion/ListaProducto";
import ConsumoApi from "./Navegacion/ConsumoApi";

const Stack = createStackNavigator();

function Stacks() {
    return (
        <Stack.Navigator
            initialRouteName="Inicio"
        >
            <Stack.Screen
                name="Inicio"
                component={Inicio}
            />

            <Stack.Screen
                name="Crear_Cuenta"
                component={Crear_Cuenta}
            />
        
        <Stack.Screen
                name="Crear_producto"
                component={Crear_producto}
            />
             <Stack.Screen
                name="Principal"
                component={Principal}
            />
            <Stack.Screen
                name="ListaProducto"
                component={ListaProducto}
            />
            <Stack.Screen
                name="ConsumoApi"
                component={ConsumoApi}
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
