import React, { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../AccesoFirebase";

const Crear_producto = () => {
  const navigation = useNavigation();

  const [estado, setEstado] = useState({
    nombreProducto: '',
    Codigo: '',
    Cantidad: '',
    Fechacaducidad: '',
  });

  const handleChangeText = (value, name) => {
    setEstado({ ...estado, [name]: value });
  };

  const registrarProduct = async () => {
    try {
      await addDoc(collection(db, 'Products'), {
        nombreProducto: estado.nombreProducto,
        Codigo: estado.Codigo,
        Cantidad: estado.Cantidad,
        Fechacaducidad: estado.Fechacaducidad
      });
      Alert.alert('Alerta', 'El producto se registró con éxito');
      navigation.navigate('Inicio');
    } catch (error) {
      console.error("Error al registrar el product: ", error);
      Alert.alert('Error', 'Hubo un problema al registrar el producto');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../image2.png')} style={styles.image} />
      <View style={styles.form}>
        <Text style={styles.title}>Productos</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre producto"
          value={estado.nombreProducto}
          onChangeText={(value) => handleChangeText(value, 'nombreProducto')}
        />
        <TextInput
          style={styles.input}
          placeholder="Codigo"
          value={estado.Codigo}
          onChangeText={(value) => handleChangeText(value, 'Codigo')}
        />
        <TextInput
          style={styles.input}
          placeholder="Cantidad"
          value={estado.Cantidad}
          onChangeText={(value) => handleChangeText(value, 'Cantidad')}
        />
        <TextInput
          style={styles.input}
          placeholder="Fechacaducidad"
          value={estado.Fechacaducidad}
          onChangeText={(value) => handleChangeText(value, 'Fechacaducidad')}
        />
        <TouchableOpacity style={styles.button} onPress={registrarProduct}>
          <Text style={styles.buttonText}>Guardar</Text>
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
    height: 40,
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

export default Crear_producto;
