import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, Alert, ScrollView, TextInput, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { getFirestore, getDocs, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import appFirebase from '../AccesoFirebase';

const db = getFirestore(appFirebase);

const ListaProducto = () => {
  const navigation = useNavigation();
  const [productos, setProductos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingProducto, setEditingProducto] = useState(null);
  const [estado, setEstado] = useState({
    nombreProducto: '',
    Codigo: '',
    Cantidad: '',
    Fechacaducidad: '',
  });

  useEffect(() => {
    const getListar = async () => {
      try {
        const qyCollection = await getDocs(collection(db, 'Products'));
        const productos = [];
        qyCollection.forEach((prod) => {
          const { nombreProducto, Codigo, Cantidad, Fechacaducidad } = prod.data();
          productos.push({
            id: prod.id,
            nombreProducto,
            Codigo,
            Cantidad,
            Fechacaducidad
          });
        });
        setProductos(productos);
      } catch (error) {
        console.log(error);
      }
    }
    getListar();
  }, []);

  const eliminarProducto = async (id) => {
    try {
      await deleteDoc(doc(db, 'Products', id));
      Alert.alert('Alerta', 'El producto se eliminó con éxito');
      setProductos(productos.filter(producto => producto.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const editarProducto = (producto) => {
    setIsEditing(true);
    setEditingProducto(producto);
    setEstado({
      nombreProducto: producto.nombreProducto,
      Codigo: producto.Codigo,
      Cantidad: producto.Cantidad,
      Fechacaducidad: producto.Fechacaducidad,
    });
  };

  const handleChangeText = (value, name) => {
    setEstado({ ...estado, [name]: value });
  };

  const actualizarProducto = async () => {
    try {
      const productRef = doc(db, 'Products', editingProducto.id);
      await updateDoc(productRef, {
        nombreProducto: estado.nombreProducto,
        Codigo: estado.Codigo,
        Cantidad: estado.Cantidad,
        Fechacaducidad: estado.Fechacaducidad
      });
      Alert.alert('Alerta', 'El producto se actualizó con éxito');
      setIsEditing(false);
      setEditingProducto(null);
      setEstado({
        nombreProducto: '',
        Codigo: '',
        Cantidad: '',
        Fechacaducidad: '',
      });
      const updatedProductos = productos.map(producto =>
        producto.id === editingProducto.id ? { ...producto, ...estado } : producto
      );
      setProductos(updatedProductos);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({ item }) => (
    <View key={item.id} style={styles.itemContainer}>
      <Text>Nombre: {item.nombreProducto}</Text>
      <Text>Codigo: {item.Codigo}</Text>
      <Text>Cantidad: {item.Cantidad}</Text>
      <Text>Fecha de caducidad: {item.Fechacaducidad}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonEditar} onPress={() => editarProducto(item)}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonEliminar} onPress={() => eliminarProducto(item.id)}>
          <Text style={styles.buttonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    
    <View style={styles.container}>
      <Text style={styles.txtTitulo}>Listado de Productos</Text>
      {isEditing ? (
        <View style={styles.form}>
          <Text style={styles.title}>Editar Producto</Text>
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
          <TouchableOpacity style={styles.button} onPress={actualizarProducto}>
            <Text style={styles.buttonText}>Actualizar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setIsEditing(false)}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={productos}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  txtTitulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#34434D',
    textAlign: 'center',
    padding: 20,
  },
  itemContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  buttonEditar: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonEliminar: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  form: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '80%',
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
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ListaProducto;
