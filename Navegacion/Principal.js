import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Principal = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    return (
        <ImageBackground source={require('../img_fondo.jpg')} style={styles.background}>
            <Image source={require('../logo_fruit.png')} style={styles.logo} />
            
            <View style={styles.container}>
            <Text style={styles.buttonText1}>Bienvenido al sistema de frutas Wilson</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Crear_producto')} 
                style={styles.button}>
                    <Text style={styles.buttonText}>Registrar 
                    Producto</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('ListaProducto')}
                style={styles.button}>
                    <Text style={styles.buttonText}> Listar Producto</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('ConsumoApi')}
                style={styles.button}>
                <Text style={styles.buttonText}>Aprender+</Text>
                </TouchableOpacity>
                
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '80%',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 40,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
    },
    button: {
        width: '80%',
        padding: 15,
        backgroundColor: '#B71C1C',
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonText1: {
        color: '#838B8B',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },

});

export default Principal;
