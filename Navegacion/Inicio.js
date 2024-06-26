import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';


const Inicio = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ImageBackground source={require('../img_fondo.jpg')} style={styles.background}>
        <Image source={require('../logo_fruit.png')} style={styles.logo} />
        
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="correo electrónico"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="contraseña"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Principal')}
            >
                <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Crear cuenta nueva
                    <TouchableOpacity onPress={() => navigation.navigate('Crear_Cuenta')}>
                        <Text style={styles.link}> Regístrate</Text>
                    </TouchableOpacity>
                </Text>
                <TouchableOpacity>
                    <Text style={styles.link}>Olvidé contraseña?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Crear_producto')}>
                    <Text style={styles.link}>Registrar Producto</Text>
                </TouchableOpacity>
            </View>
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
        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderRadius: 40,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
        
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        width: '100%',
        backgroundColor: '#FFF',
        borderRadius: 15,
        padding: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 10,
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
    footer: {
        marginTop: 20,
        alignItems: 'center',
    },
    footerText: {
        color: '#f0f0f0',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    link: {
        color: '#f0f0f0',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
        alignItems: 'flex-start',
        
    },
});

export default Inicio;