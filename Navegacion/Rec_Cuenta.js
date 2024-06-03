import React from "react";
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';

import navegation from "@react-navigation/bottom-tabs"


const Rec_Cuenta = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('./imageLog.png')} style={styles.img_Apli} />

      <Text style={styles.txtBienvenido}>Recuperar cuenta</Text>
      <Text style={styles.titulo}>Ingresar su correo electronico para recuperar cuenta:</Text>

      <TextInput placeholder='multimedios@gmail.com' style={styles.txtInput} />

      <TouchableOpacity onPress={() => navigation.navigate("Bienvenido")}>
        <Text style={styles.txtOlvido}>Iniciar Sesion</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Rec_Cuenta1")}>

        <LinearGradient

          colors={['#00C1BB', '#005B58']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.btnGradient}
        >
          <Text style={styles.btnText}>Continuar</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity >
        <Text style={styles.txtCrear_Cuenta}>
          No tiene cuenta.
        </Text>

      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Crear_Cuenta")}>

        <Text style={styles.txtRigistro}>Registrate</Text>

      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

export default Rec_Cuenta;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  txtBienvenido: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#34434D',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: '300',
    color: 'gray',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  txtInput: {
    width: '100%',
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    paddingLeft: 20,
    marginTop: 20,
    borderColor: 'grey',
    backgroundColor: '#F5F5F5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  txtOlvido: {
    fontSize: 16,
    color: "#00c1bb",
    marginTop: 10,
    textAlign: 'right',
    alignSelf: 'flex-end',
  },
  txtCrear_Cuenta: {
    fontSize: 16,
    color: "#00c1bb",
    marginTop: 10,
    textAlign: 'center',
  },
  txtRigistro: {
    color: "#00c1bb",
    fontWeight: "bold"
  },
  img_Apli: {
    width: '110%',
    height: 250,
  },
  btnGradient: {
    borderRadius: 30,
    width: 219,
    height: 53,
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});