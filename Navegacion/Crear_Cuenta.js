import React, { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import appFireBase from "../AccesoFirebase";

const db = getFirestore(appFireBase);

const Crear_Cuenta = () => {
  const navigation = useNavigation();

  const [estado, setEstado] = useState({
    nombreCompleto: '',
    email: '',
    clave: '',
    confirmarClave: '',
  });

  const handleChangeText = (value, name) => {
    setEstado({ ...estado, [name]: value });
  };

  const registrarUsuario = async () => {
    if (estado.clave !== estado.confirmarClave) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    try {
      await addDoc(collection(db, 'User'), {
        nombreCompleto: estado.nombreCompleto,
        email: estado.email,
        clave: estado.clave
      });
      Alert.alert('Alerta', 'El usuario se registró con éxito');
      navigation.navigate('Bienvenido');
    } catch (error) {
      console.error("Error al registrar el usuario: ", error);
      Alert.alert('Error', 'Hubo un problema al registrar el usuario');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../image2.png')} style={styles.image} />
      <View style={styles.form}>
        <Text style={styles.title}>Crear cuenta nueva</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={estado.nombreCompleto}
          onChangeText={(value) => handleChangeText(value, 'nombreCompleto')}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={estado.email}
          onChangeText={(value) => handleChangeText(value, 'email')}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          value={estado.clave}
          onChangeText={(value) => handleChangeText(value, 'clave')}
        />
        <TextInput
          style={styles.input}
          placeholder="Comprobar contraseña"
          secureTextEntry={true}
          value={estado.confirmarClave}
          onChangeText={(value) => handleChangeText(value, 'confirmarClave')}
        />
        <TouchableOpacity style={styles.button} onPress={registrarUsuario}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  form: {
    width: '80%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  button: {
    width: '80%',
    height: 40,  // Updated height to 40
    backgroundColor: '#a00',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Crear_Cuenta;
